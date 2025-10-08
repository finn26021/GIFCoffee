# GitHub Pages Deployment Anleitung

Diese App ist jetzt bereit für GitHub Pages! Folge diesen Schritten:

## Schritt 1: GitHub Repository erstellen

1. Gehe zu [GitHub](https://github.com/new)
2. Erstelle ein neues Repository (z.B. "coffee-kindness-landing")
3. Setze es auf **Public** (GitHub Pages funktioniert nur mit Public Repos im kostenlosen Plan)
4. **Nicht** mit README, .gitignore oder License initialisieren (das haben wir schon)

## Schritt 2: Repository mit GitHub verbinden

Führe folgende Befehle im Terminal aus:

```bash
cd /Users/finn/Downloads/coffee-kindness-landing

# Ersetze USERNAME mit deinem GitHub Username und REPOSITORY mit dem Repository-Namen
git remote add origin https://github.com/USERNAME/REPOSITORY.git

# Branch zu main umbenennen (falls nötig)
git branch -M main

# Code zu GitHub pushen
git push -u origin main
```

## Schritt 3: GitHub Pages aktivieren

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **Settings** (Einstellungen)
3. Navigiere zu **Pages** im linken Menü
4. Unter **Source** wähle: **GitHub Actions**
5. Die Deployment wird automatisch starten!

## Schritt 4: URL anpassen (falls nötig)

Wenn dein Repository **NICHT** `github.io` im Namen hat, musst du den `basePath` in `next.config.mjs` anpassen:

```javascript
basePath: '/repository-name',  // z.B. '/coffee-kindness-landing'
```

Dann commit & push:
```bash
git add next.config.mjs
git commit -m "Update basePath for GitHub Pages"
git push
```

## Fertig! 🎉

Deine App wird verfügbar sein unter:
- `https://USERNAME.github.io/REPOSITORY/` (normales Repo)
- `https://USERNAME.github.io/` (wenn Repo "USERNAME.github.io" heißt)

Der Deployment-Prozess dauert etwa 1-2 Minuten. Du kannst den Fortschritt im **Actions** Tab auf GitHub verfolgen.

## Lokale Entwicklung

```bash
# Dependencies installieren
pnpm install

# Development Server starten
pnpm dev

# Production Build testen
pnpm build
```

## Troubleshooting

**404 Fehler nach Deployment:**
- Prüfe ob `basePath` in `next.config.mjs` korrekt gesetzt ist
- Stelle sicher, dass GitHub Pages aktiviert ist (Settings → Pages)

**Build Fehler:**
- Prüfe die Logs im Actions Tab auf GitHub
- Stelle sicher, dass alle Dependencies in `package.json` korrekt sind

**Änderungen werden nicht sichtbar:**
- GitHub Pages Cache kann bis zu 10 Minuten dauern
- Versuche Hard Refresh (Ctrl+Shift+R oder Cmd+Shift+R)

