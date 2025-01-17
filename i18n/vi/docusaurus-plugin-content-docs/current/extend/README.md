---
slug: '/extend'
---

# Mở rộng Flarum

Flarum is minimalistic, but it's also highly extensible. In fact, most of the features that ship with Flarum are actually extensions!

This approach makes Flarum extremely customizable. A user can disable any features they don't use on their forum, and install other extensions to make a forum perfect for their community.

In order to achieve this extensibility, Flarum has been built with rich APIs and extension points. With some programming knowledge, you can leverage these APIs to add just about any feature you want. This section of the documentation aims to teach you how Flarum works, and how to use the APIs so that you can build your own extensions.

## Core với Tiện ích mở rộng

Where do we draw the line between Flarum's core and its extensions? Why are some features included in the core, and others aren't? It is important to understand this distinction so that we can maintain consistency and quality within Flarum's ecosystem.

**Flarum's core** is not intended to be packed full of features. Rather, it is a scaffold, or a framework, which provides a reliable foundation on which extensions can build. It contains only basic, unopinionated functionality that is essential to a forum: discussions, posts, users, groups, and notifications.

**Bundled extensions** are features that are packaged with Flarum and enabled by default. They are extensions just like any other, and may be disabled and uninstalled. While their scope is not intended to address all use-cases, the idea is to make them generic and configurable enough that they can satisfy the majority.

**Third-party extensions** are features which are made by others and are not officially supported by the Flarum team. They can be built and used to address more specific use-cases.

If you are aiming to address a bug or shortcoming of the core, or of an existing bundled extension, it may be appropriate to *contribute to the respective project* rather than disperse effort on a new third-party extension. It is a good idea to start a discussion on the [Flarum Community](https://discuss.flarum.org/) to get the perspective of the Flarum developers.

## Tài nguyên hữu dụng

- [Tài liệu này](start.md)
- [Mẹo dành cho nhà phát triển mới bắt đầu](https://discuss.flarum.org/d/5512-extension-development-tips)
- [Flarum CLI](https://github.com/flarum/cli)
- [Các lập trình viên giải thích về quá trình phát triển tiện ích mở rộng](https://discuss.flarum.org/d/6320-extension-developers-show-us-your-workflow)
- [Mẹo namespace tiện ích mở rộng](https://discuss.flarum.org/d/9625-flarum-extension-namespacing-tips)
- [Tài liệu Mithril js](https://mithril.js.org/)
- [Tài liệu API Laravel](https://laravel.com/api/8.x/)
- [Tài liệu API Flarum](https://api.flarum.org)
- [ES6 cheatsheet](https://github.com/DrkSephy/es6-cheatsheet)

### Nhận trợ giúp

- [Cộng đồng Dev Flarum](https://discuss.flarum.org/t/dev)
- [Tham gia #extend trên discord](https://flarum.org/discord/)
