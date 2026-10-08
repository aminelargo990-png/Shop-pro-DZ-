import { useState } from "react";
import { Store, Package, Settings, Globe } from "lucide-react";

export default function App() {
  const [language, setLanguage] = useState("ar");

  const isArabic = language === "ar";

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      style={{
        minHeight: "100vh",
        background: "#f1f5f9",
        fontFamily: "Arial, sans-serif",
        color: "#0f172a",
      }}
    >
      <header
        style={{
          background: "#0f172a",
          color: "white",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: 0 }}>🛍️ Shop Pro</h2>

        <button
          onClick={() => setLanguage(isArabic ? "fr" : "ar")}
          style={{
            padding: "10px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <Globe size={16} style={{ verticalAlign: "middle" }} />{" "}
          {isArabic ? "Français" : "العربية"}
        </button>
      </header>

      <main style={{ maxWidth: "600px", margin: "auto", padding: "24px" }}>
        <h1>{isArabic ? "مرحبًا بك في سوق برو" : "Bienvenue sur Shop Pro"}</h1>

        <p style={{ color: "#64748b" }}>
          {isArabic
            ? "أدر متجرك ومنتجاتك بسهولة."
            : "Gérez facilement votre magasin et vos produits."}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginTop: "28px",
          }}
        >
          <div style={cardStyle}>
            <Store size={32} color="#2563eb" />
            <h3>{isArabic ? "متجري" : "Mon magasin"}</h3>
            <p>{isArabic ? "معلومات المتجر" : "Informations du magasin"}</p>
          </div>

          <div style={cardStyle}>
            <Package size={32} color="#16a34a" />
            <h3>{isArabic ? "المنتجات" : "Produits"}</h3>
            <p>{isArabic ? "إدارة المنتجات" : "Gérer les produits"}</p>
          </div>

          <div style={cardStyle}>
            <Settings size={32} color="#9333ea" />
            <h3>{isArabic ? "الإعدادات" : "Paramètres"}</h3>
            <p>{isArabic ? "إعدادات التطبيق" : "Réglages de l'application"}</p>
          </div>

          <div style={cardStyle}>
            <span style={{ fontSize: "30px" }}>📷</span>
            <h3>{isArabic ? "مسح الباركود" : "Scanner"}</h3>
            <p>{isArabic ? "البحث عن منتج" : "Rechercher un produit"}</p>
          </div>
        </div>

        <p style={{ textAlign: "center", marginTop: "35px", color: "#64748b" }}>
          Shop Pro © 2026
        </p>
      </main>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "16px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
};
