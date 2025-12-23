import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { Language, useI18n } from "./i18n";
import { useTheme } from "./theme-provider";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, lang, setLang } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const languages: Language[] = ["en", "fr", "ar"];

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 min-w-0">
            <img src="/logo.png" alt="Académie de l'Avenir Souriant" className="h-8 md:h-12 w-auto object-contain" />
            <span className="brand-title text-[13px] md:text-lg font-medium text-primary truncate max-w-[55vw] md:max-w-none">
              {t("common.brand")}
            </span>
          </Link>

          {/* Mobile controls: language dropdown + theme + menu button */}
          <div className="md:hidden flex items-center gap-2">
            <label className="sr-only" htmlFor="mobile-lang-select">Language</label>
            <select
              id="mobile-lang-select"
              value={lang}
              onChange={(e) => setLang(e.target.value as Language)}
              className="text-xs px-2 py-1 rounded-md border border-border bg-card text-foreground"
            >
              {languages.map((code) => (
                <option key={code} value={code}>{code.toUpperCase()}</option>
              ))}
            </select>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4 items-center text-sm">
            <Link to="/" className="hover:text-primary transition-colors">{t("nav.home")}</Link>
            <Link to="/about" className="hover:text-primary transition-colors">{t("nav.about")}</Link>
            <Link to="/courses" className="hover:text-primary transition-colors">{t("nav.courses")}</Link>
            <Link to="/activities" className="hover:text-primary transition-colors">{t("nav.activities")}</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">{t("nav.contact")}</Link>
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <div className="flex items-center gap-1 bg-card border border-border rounded-full px-2 py-0.5">
              {languages.map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-2 py-0.5 rounded-full text-xs font-semibold transition-colors ${
                    lang === code ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            <Link
              to="/register"
              className="px-5 py-1.5 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all hover:bg-primary/90"
            >
              {t("nav.register")}
            </Link>
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
              <Link
                to="/register"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all text-center hover:bg-primary/90"
              >
                {t("nav.register")}
              </Link>
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
              <Link to="/privacy" className="hover:text-primary transition-colors">{t("common.privacy")}</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">{t("common.terms")}</Link>
                <Link to="/unsubscribe" className="hover:text-primary transition-colors">{t("common.unsubscribe")}</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
