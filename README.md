# Lotus Med — lotusmed.com.ua

Статичний україномовний сайт постачальника медичних виробів для приватних і державних закладів охорони здоров'я України.

## Напрями

- клапанні рішення Meril Life Sciences;
- дренажні системи Sinapi Biomedical;
- хірургічні інструменти Geister Medizintechnik.

## Структура

```text
lotusmed/
├── index.html             # Головна
├── meril.html             # Клапанні рішення Meril
├── sinapi.html            # Дренажні системи Sinapi
├── geister.html           # Хірургічні інструменти Geister
├── postachannia.html      # Закупівлі та порядок роботи
├── contacts.html          # Контакти
├── privacy.html           # Політика конфіденційності
├── robots.txt
├── sitemap.xml
├── _headers               # Заголовки Cloudflare Pages
├── wrangler.jsonc         # Конфігурація Cloudflare Pages
└── assets/
    ├── css/
    ├── img/
    └── js/
```

## Локальний перегляд

Сайт не потребує збірки. Запустіть статичний сервер з кореня проєкту:

```bash
python3 -m http.server 8080
```

Після цього відкрийте `http://localhost:8080/`.

## Cloudflare Pages

Для деплою через GitHub оберіть такі параметри:

- Framework preset: `None`;
- Build command: залишити порожнім;
- Build output directory: `.`;
- Root directory: корінь репозиторію.

Після першого успішного деплою додайте custom domain `lotusmed.com.ua` у Cloudflare Pages. DNS домену має бути делегований на видані Cloudflare nameservers.

За потреби сайт можна опублікувати безпосередньо з кореня папки:

```bash
npx wrangler pages deploy . --project-name=lotusmed
```

## SEO та безпека

- canonical URL: `https://lotusmed.com.ua`;
- `robots.txt` посилається на `sitemap.xml`;
- `_headers` задає базові заголовки безпеки та окремі правила кешування;
- секрети й дані доступу не зберігаються у репозиторії.
