(function () {
  const CMS = window.CMS;
  const React = window.React;
  const marked = window.marked;

  if (!CMS || !React || !marked) {
    return;
  }

  const h = React.createElement;

  function normalizeAssetUrl(url) {
    if (!url) return "";

    const trimmedUrl = String(url).trim();

    if (
      trimmedUrl.startsWith("/") ||
      trimmedUrl.startsWith("http://") ||
      trimmedUrl.startsWith("https://")
    ) {
      return trimmedUrl;
    }

    return `/${trimmedUrl.replace(/^\.?\//, "")}`;
  }

  function formatDate(date) {
    if (!date) return "";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "";
    }

    return parsedDate.toLocaleDateString("pl-PL", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  const renderer = new marked.Renderer();

  renderer.image = function ({ href, title, text }) {
    const src = normalizeAssetUrl(href);
    const alt = text || "";
    const titleAttribute = title ? ` title="${title}"` : "";

    return `<img src="${src}" alt="${alt}"${titleAttribute} loading="lazy" class="news-preview__body-image">`;
  };

  marked.setOptions({ renderer });

  function NewsPreview(props) {
    const entry = props.entry;
    const title = entry.getIn(["data", "title"]) || "Bez tytulu";
    const date = entry.getIn(["data", "date"]);
    const image = normalizeAssetUrl(entry.getIn(["data", "image"]));
    const showHeaderImage = entry.getIn(["data", "showHeaderImage"]);
    const body = entry.getIn(["data", "body"]) || "";
    const html = marked.parse(body);

    return h(
      "section",
      { className: "news-post" },
      h(
        "a",
        { className: "back-link", href: "#" },
        "\u2190 Wroc do newsow"
      ),
      h("p", { className: "news-date" }, formatDate(date)),
      h("h1", null, title),
      showHeaderImage !== false && image
        ? h("img", {
            className: "news-image",
            src: image,
            alt: title,
          })
        : null,
      h("div", {
        className: "news-body",
        dangerouslySetInnerHTML: { __html: html },
      })
    );
  }

  CMS.registerPreviewStyle("/admin/news-preview.css");
  CMS.registerPreviewTemplate("news", NewsPreview);
})();
