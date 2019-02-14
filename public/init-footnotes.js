var bigfoot = $.bigfoot({
    actionOriginalFN: 'delete',
    buttonMarkup: (
      '<div class="bigfoot-footnote__container">' +
      ' <button href="#" class="bigfoot-footnote__button" rel="footnote"' +
      ' id="{{SUP:data-footnote-backlink-ref}}"' +
      ' data-footnote-number="{{FOOTNOTENUM}}"' +
      ' data-footnote-identifier="{{FOOTNOTEID}}"' +
      ' alt="See Footnote {{FOOTNOTENUM}}"' +
      ' data-bigfoot-footnote="{{FOOTNOTECONTENT}}">' +
      ' <span class="visually-hidden">{{FOOTNOTENUM}}</span>' +
      ' </button>' +
      '</div>'
    )
  });