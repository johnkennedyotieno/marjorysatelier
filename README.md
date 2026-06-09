# Marjory's Atelier — Website

A clean, fast lead-generation website hosted on GitHub Pages. Free to run. WhatsApp-powered ordering. No backend required.

---

## How to deploy on GitHub Pages

1. Create a GitHub account at https://github.com if you don't have one
2. Create a new repository — name it exactly: `marjorys-atelier`
3. Upload all these files keeping the same folder structure
4. Go to the repository **Settings → Pages**
5. Under "Source" select **Deploy from a branch → main → / (root)**
6. Click Save. Your site will be live at: `https://yourusername.github.io/marjorys-atelier`

### Optional: Custom domain (e.g. marjorysatelier.com)
- Buy a domain from Namecheap or Hover (~$12/year)
- In GitHub Pages settings, enter your custom domain
- Follow GitHub's instructions to point your DNS records

---

## How to update products (monthly refresh)

All products live in one file: **`products.json`**

### To swap a product out:
1. Open `products.json` in any text editor (even Notepad)
2. Find the product you want to change under `"bags"` or `"wearables"`
3. Edit the fields:
   - `"name"` — product name
   - `"description"` — short description (keep it under 15 words)
   - `"price"` — e.g. `"KSH 3,500"`
   - `"image"` — URL or file path to the product photo (see below)
   - `"whatsapp_text"` — the message pre-filled for the customer
4. Save the file and re-upload to GitHub

### To add a product photo:
- Put your image file in the `assets/` folder
- Set the `"image"` value to `"assets/your-photo-name.jpg"`
- Keep images under 500KB for fast loading. Use https://squoosh.app to compress them.

### Maximum products shown:
- 6 bags + 6 wearables = 12 total (recommended)
- You can go up to 8 per category if needed
- Simply add or remove entries in the JSON file

---

## WhatsApp order flow

Every "Order" button on the site opens WhatsApp with a pre-filled message to **+254711789266**.

The message text is set per-product in `products.json` under `"whatsapp_text"`.

To change the WhatsApp number, search for `254711789266` in both `index.html` and `products.json` and replace all instances.

---

## Social media links

Current links in `index.html`:
- Instagram: `https://www.instagram.com/marjorys.atelier/`
- TikTok: `https://www.tiktok.com/@marjorys.atelier`
- YouTube: `https://www.youtube.com/channel/UCYSIOyVMUxmkQl5nEhm2WdQ`

Search for these URLs in `index.html` and replace with correct handles.

---

## File structure

```
marjorys-atelier/
├── index.html          ← main page
├── products.json       ← edit this to update the catalogue
├── css/
│   └── style.css       ← all styles
├── js/
│   └── main.js         ← site behaviour
└── assets/
    ├── logo.png         ← logo (replace with updated version if needed)
    └── [product photos] ← add images here
```

---

## Credits
Site design and brand strategy: Otieno John Kennedy  
Brand founder: Marjory Atieno
