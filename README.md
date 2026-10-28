# Miz UAE — 5 языков (Hugo)

Главная страница miz-uae.com в 5 языковых версиях с переключателем языка в шапке и новой темой «Night Gold».

| Язык | Адрес | Файл текста | Карточки топа | Подписи интерфейса |
|---|---|---|---|---|
| English | `/` | `content/_index.en.md` | `data/cards/en.yaml` | `i18n/en.yaml` |
| العربية (RTL) | `/ar/` | `content/_index.ar.md` | `data/cards/ar.yaml` | `i18n/ar.yaml` |
| हिन्दी | `/hi/` | `content/_index.hi.md` | `data/cards/hi.yaml` | `i18n/hi.yaml` |
| اردو (RTL) | `/ur/` | `content/_index.ur.md` | `data/cards/ur.yaml` | `i18n/ur.yaml` |
| Русский | `/ru/` | `content/_index.ru.md` | `data/cards/ru.yaml` | `i18n/ru.yaml` |

## Что где править

- **Порядок брендов, рейтинг, логотип** — `data/brands.yaml` (порядок строк = место в топе, общий для всех языков).
- **Депозит / бонус в карточке** — `data/cards/<язык>.yaml`.
- **Текст страницы, Title, Description, H1, FAQ** — `content/_index.<язык>.md` (FAQ — во frontmatter, из него же строится FAQPage-разметка).
- **Цвета темы** — блок `:root` в начале `assets/css/main.css`.
- **Добавить/убрать язык** — `[languages]` в `hugo.toml` + три файла языка.

## Что скопировать из старого репозитория перед запуском

1. `static/images/` — логотип, фавикон, `banner.webp`, `omar.webp`, логотипы брендов (пути те же, что на текущем сайте). Пока файлов нет, вместо логотипов показываются буквы.
2. `static/js/go.js` — скрипт партнёрских ссылок (кнопки Play Now с `data-secure-link`). Подключится автоматически, если файл есть.
3. Страницы обзоров (`/betwinner/` и др.), гайды, about, privacy и т.д. Ссылки на них со всех языков пока ведут на английские адреса; когда появится перевод страницы, ссылка переключится на него сама.

## Запуск

- Локально: `hugo server` → http://localhost:1313
- Cloudflare Workers: `wrangler.jsonc` + `build.sh` уже в репо (Build command пусто, Deploy command `npx wrangler deploy`).
- GitHub Pages: работает со старым workflow `hugo.yaml` (нужен Hugo 0.158+).

## Что изменено в тексте

- Лёгкий рерайт всего текста главной, факты, цифры и бренды без изменений.
- Убраны упоминания VPN (в т.ч. вопрос FAQ «Нужен ли VPN» заменён на «Как проверить сайт до депозита»).
- Разметка: один `@graph` (WebSite, Organization, Person, WebPage, ItemList топа, FAQPage) вместо пустого `WebSite` и микроразметки FAQ.
