import { Outlet, Link } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Language, useI18n } from "./i18n";
import { useTheme } from "./theme-provider";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, lang, setLang } = useI18n();
  const { theme, toggleTheme } = useTheme();

  const languages: Language[] = ["en", "fr", "ar"];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Académie de l'Avenir Souriant" className="h-12 w-12" />
            <span className="text-xl font-bold text-primary hidden sm:inline">
              {t("common.brand")}
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/" className="hover:text-primary transition-colors">{t("nav.home")}</Link>
            <Link to="/about" className="hover:text-primary transition-colors">{t("nav.about")}</Link>
            <Link to="/courses" className="hover:text-primary transition-colors">{t("nav.courses")}</Link>
            <Link to="/activities" className="hover:text-primary transition-colors">{t("nav.activities")}</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">{t("nav.contact")}</Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <div className="flex items-center gap-1 bg-card border border-border rounded-full px-2 py-1">
              {languages.map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-2 py-1 rounded-full text-xs font-semibold transition-colors ${
                    lang === code ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfEgAjYtASRQV5OY5J8GMCbKgxdMuauq6fj8t-jU-A4vX3HHg/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all hover:bg-primary/90"
            >
              {t("nav.register")}
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link to="/" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>{t("nav.home")}</Link>
              <Link to="/about" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>{t("nav.about")}</Link>
              <Link to="/courses" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>{t("nav.courses")}</Link>
              <Link to="/activities" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>{t("nav.activities")}</Link>
              <Link to="/contact" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>{t("nav.contact")}</Link>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
              </button>
              <div className="flex gap-2 items-center">
                {languages.map((code) => (
                  <button
                    key={code}
                    onClick={() => setLang(code)}
                    className={`px-3 py-1 rounded-full text-sm font-semibold border ${
                      lang === code ? "bg-primary text-primary-foreground border-primary" : "border-border"
                    }`}
                  >
                    {code.toUpperCase()}
                  </button>
                ))}
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfEgAjYtASRQV5OY5J8GMCbKgxdMuauq6fj8t-jU-A4vX3HHg/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all text-center hover:bg-primary/90"
              >
                {t("nav.register")}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">{t("common.brand")}</h3>
              <p className="text-muted-foreground text-sm">{t("footer.description")}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t("footer.programs")}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/courses" className="hover:text-primary transition-colors">{t("nav.courses")}</Link></li>
                <li><Link to="/activities" className="hover:text-primary transition-colors">{t("nav.activities")}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t("footer.company")}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">{t("nav.home")}</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">{t("nav.contact")}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:administration@avernisouriant.com" className="hover:text-primary transition-colors">
                  administration@avernisouriant.com
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">{t("common.allRights")}</p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">{t("common.privacy")}</a>
              <a href="#" className="hover:text-primary transition-colors">{t("common.terms")}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
