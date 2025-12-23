import { motion } from "motion/react";
import { useI18n } from "../i18n";

type Section = {
  heading: string;
  body: string[];
};

type TermsContent = {
  title: string;
  updated: string;
  notice: string;
  sections: Section[];
};

export default function TermsPage() {
  const { t, lang } = useI18n();

  const termsContent: Record<string, TermsContent> = {
    en: {
      title: t("terms.title"),
      updated: t("terms.lastUpdated"),
      notice: t("terms.languageNotice"),
      sections: [
        {
          heading: "Agreement to Our Legal Terms",
          body: [
            "By using avenirsouriant.com and related services, you agree to these terms. If you do not agree, stop using the services immediately.",
            "Users must be at least 13 years old; minors need consent and supervision from a parent or guardian."
          ]
        },
        {
          heading: "Our Services",
          body: [
            "Use the services only where access is lawful. You are responsible for complying with local laws."
          ]
        },
        {
          heading: "Intellectual Property",
          body: [
            "We own or license all content, code, media, and marks. Personal, non-commercial use is allowed; other uses require written permission."
          ]
        },
        {
          heading: "User Representations",
          body: [
            "Provide accurate information and do not use the services for unlawful purposes or in violation of applicable laws."
          ]
        },
        {
          heading: "Purchases and Payment",
          body: [
            "Provide valid billing details. Prices may change. Sales tax may apply. Payments are in CAD."
          ]
        },
        {
          heading: "Refund Policy",
          body: ["All sales are final; no refunds."]
        },
        {
          heading: "Prohibited Activities",
          body: [
            "Do not misuse the services, including harassment, security breaches, scraping, reverse engineering, or unauthorized advertising."
          ]
        },
        {
          heading: "User Contributions",
          body: [
            "Feedback may be used without compensation. You are responsible for any content you submit."
          ]
        },
        {
          heading: "Service Management",
          body: [
            "We may monitor, limit, or remove content and restrict access to protect the service and users."
          ]
        },
        {
          heading: "Privacy",
          body: [
            "Use is subject to our Privacy Policy. By using the service, you consent to processing in Canada."
          ]
        },
        {
          heading: "Term and Termination",
          body: [
            "We may suspend or terminate access for violations of these terms or applicable law."
          ]
        },
        {
          heading: "Modifications and Interruptions",
          body: [
            "We may modify or discontinue services without notice and are not liable for downtime or unavailability."
          ]
        },
        {
          heading: "Governing Law",
          body: ["These terms are governed by the laws of Canada."]
        },
        {
          heading: "Dispute Resolution",
          body: [
            "Disputes will be negotiated informally first. If unresolved, they may go to arbitration or competent courts, as applicable."
          ]
        },
        {
          heading: "Corrections",
          body: ["We may correct errors or update information without notice."]
        },
        {
          heading: "Disclaimer",
          body: ["Services are provided as-is without warranties. Liability is limited as permitted by law."]
        },
        {
          heading: "Limitations of Liability",
          body: ["Our liability is limited to the amount paid in the last 12 months before the claim, where permitted by law."]
        },
        {
          heading: "Indemnification",
          body: ["You will indemnify us for claims related to your use of the services or breach of these terms."]
        },
        {
          heading: "User Data",
          body: ["We may retain performance-related data; you are responsible for your own backups."]
        },
        {
          heading: "Electronic Communications",
          body: ["You agree to electronic communications and signatures."]
        },
        {
          heading: "Miscellaneous",
          body: ["These terms form the entire agreement. If any clause is unenforceable, the remainder stays in effect."]
        },
        {
          heading: "Contact",
          body: ["IA Forma, 1325 Rue Cartier Saint-Laurent, Montreal, Quebec H4L 2N6, Canada. Phone: (514) 515-4492. Email: administration@avernisouriant.com."]
        }
      ]
    },
    fr: {
      title: t("terms.title"),
      updated: t("terms.lastUpdated"),
      notice: t("terms.languageNotice"),
      sections: [
        {
          heading: "Acceptation des conditions",
          body: [
            "L'utilisation du site implique votre accord avec ces conditions. Si vous n'êtes pas d'accord, cessez immédiatement d'utiliser les services.",
            "Les utilisateurs doivent avoir au moins 13 ans; les mineurs ont besoin du consentement et de la supervision d'un parent ou tuteur."
          ]
        },
        {
          heading: "Nos services",
          body: ["Utilisez les services uniquement là où c'est légal. Vous êtes responsable du respect des lois locales."]
        },
        {
          heading: "Propriété intellectuelle",
          body: [
            "Nous détenons ou concédons sous licence tout contenu, code, média et marques. L'usage personnel et non commercial est autorisé; tout autre usage requiert une autorisation écrite."
          ]
        },
        {
          heading: "Déclarations de l'utilisateur",
          body: ["Fournissez des informations exactes et n'utilisez pas les services à des fins illégales ou contraires aux lois en vigueur."]
        },
        {
          heading: "Achats et paiement",
          body: ["Fournissez des données de facturation valides. Les prix peuvent changer. Des taxes peuvent s'appliquer. Les paiements sont en CAD."]
        },
        {
          heading: "Politique de remboursement",
          body: ["Toutes les ventes sont finales; aucun remboursement."]
        },
        {
          heading: "Activités interdites",
          body: [
            "Aucune utilisation abusive des services, y compris harcèlement, violation de sécurité, extraction automatique de données, ingénierie inverse ou publicité non autorisée."
          ]
        },
        {
          heading: "Contributions",
          body: ["Les commentaires peuvent être utilisés sans compensation. Vous êtes responsable de tout contenu soumis."]
        },
        {
          heading: "Gestion du service",
          body: ["Nous pouvons surveiller, limiter ou supprimer du contenu et restreindre l'accès pour protéger le service et les utilisateurs."]
        },
        {
          heading: "Confidentialité",
          body: ["L'utilisation est soumise à notre Politique de confidentialité. En utilisant le service, vous consentez au traitement au Canada."]
        },
        {
          heading: "Durée et résiliation",
          body: ["Nous pouvons suspendre ou résilier l'accès en cas de violation des conditions ou de la loi."]
        },
        {
          heading: "Modifications et interruptions",
          body: ["Nous pouvons modifier ou interrompre les services sans préavis et ne sommes pas responsables des indisponibilités."]
        },
        {
          heading: "Droit applicable",
          body: ["Les présentes conditions sont régies par les lois du Canada."]
        },
        {
          heading: "Règlement des litiges",
          body: ["Les litiges feront l'objet d'une négociation informelle d'abord, puis, si nécessaire, d'un arbitrage ou des tribunaux compétents."]
        },
        {
          heading: "Corrections",
          body: ["Nous pouvons corriger des erreurs ou mettre à jour les informations sans préavis."]
        },
        {
          heading: "Avertissement",
          body: ["Les services sont fournis tels quels sans garanties. Notre responsabilité est limitée selon la loi."]
        },
        {
          heading: "Limitation de responsabilité",
          body: ["Notre responsabilité est limitée au montant payé au cours des 12 derniers mois avant la réclamation, lorsque la loi le permet."]
        },
        {
          heading: "Indemnisation",
          body: ["Vous nous indemniserez pour toute réclamation liée à votre usage des services ou à une violation des présentes conditions."]
        },
        {
          heading: "Données utilisateur",
          body: ["Nous pouvons conserver des données liées aux performances; vous êtes responsable de vos sauvegardes."]
        },
        {
          heading: "Communications électroniques",
          body: ["Vous acceptez les communications et signatures électroniques."]
        },
        {
          heading: "Divers",
          body: ["Ces conditions constituent l'accord complet. Si une clause est inapplicable, le reste demeure en vigueur."]
        },
        {
          heading: "Contact",
          body: ["IA Forma, 1325 Rue Cartier Saint-Laurent, Montréal (Québec) H4L 2N6, Canada. Tél.: (514) 515-4492. Courriel: administration@avernisouriant.com."]
        }
      ]
    },
    ar: {
      title: t("terms.title"),
      updated: t("terms.lastUpdated"),
      notice: t("terms.languageNotice"),
      sections: [
        {
          heading: "الموافقة على الشروط القانونية",
          body: [
            "يُعد استخدامك لموقع avenirsouriant.com والخدمات المرتبطة به موافقة على هذه الشروط. إذا لم توافق، يرجى التوقف عن الاستخدام فوراً.",
            "يجب أن يكون عمر المستخدم 13 عاماً على الأقل؛ ويحتاج القاصر إلى موافقة ومتابعة ولي الأمر."
          ]
        },
        {
          heading: "خدماتنا",
          body: ["استخدم الخدمات فقط حيث يكون الوصول قانونياً. أنت مسؤول عن الالتزام بالقوانين المحلية."]
        },
        {
          heading: "الملكية الفكرية",
          body: ["نمتلك أو نرخص كل المحتوى والكود والوسائط والعلامات. يسمح بالاستخدام الشخصي وغير التجاري فقط ما لم يتم الحصول على إذن خطي."]
        },
        {
          heading: "إقرارات المستخدم",
          body: ["قدّم معلومات دقيقة ولا تستخدم الخدمات لأغراض غير قانونية أو مخالفة للأنظمة السارية."]
        },
        {
          heading: "المشتريات والدفع",
          body: ["قدّم بيانات فوترة صحيحة. قد تتغير الأسعار. قد تُطبق الضرائب. المدفوعات بالدولار الكندي."]
        },
        {
          heading: "سياسة الاسترجاع",
          body: ["جميع المبيعات نهائية؛ لا توجد استردادات."]
        },
        {
          heading: "أنشطة محظورة",
          body: ["يُحظر إساءة استخدام الخدمات (مثل المضايقة، اختراق الأمان، الجمع الآلي للبيانات، الهندسة العكسية، أو الإعلان دون إذن)."]
        },
        {
          heading: "مساهمات المستخدم",
          body: ["يمكن استخدام الملاحظات التي ترسلها دون تعويض. أنت مسؤول عن أي محتوى ترسله."]
        },
        {
          heading: "إدارة الخدمة",
          body: ["يجوز لنا المراقبة أو التقييد أو الإزالة أو الحد من الوصول لحماية الخدمة والمستخدمين."]
        },
        {
          heading: "الخصوصية",
          body: ["يخضع الاستخدام لسياسة الخصوصية. باستخدام الخدمة، توافق على المعالجة في كندا."]
        },
        {
          heading: "المدة والإنهاء",
          body: ["يجوز لنا تعليق أو إنهاء الوصول في حال انتهاك الشروط أو القانون."]
        },
        {
          heading: "التعديلات والانقطاعات",
          body: ["يجوز لنا تعديل أو إيقاف الخدمات دون إشعار ولا نتحمل مسؤولية فترات التوقف."]
        },
        {
          heading: "القانون الحاكم",
          body: ["تخضع هذه الشروط لقوانين كندا."]
        },
        {
          heading: "حل النزاعات",
          body: ["تتم محاولة التفاوض الودي أولاً، ثم يمكن اللجوء إلى التحكيم أو المحاكم المختصة إذا لزم الأمر."]
        },
        {
          heading: "التصحيحات",
          body: ["يجوز لنا تصحيح الأخطاء أو تحديث المعلومات دون إشعار."]
        },
        {
          heading: "إخلاء المسؤولية",
          body: ["يتم تقديم الخدمات كما هي دون ضمانات. مسؤوليتنا محدودة وفق القانون."]
        },
        {
          heading: "حدود المسؤولية",
          body: ["مسؤوليتنا محدودة بالمبلغ الذي دفعته خلال آخر 12 شهراً قبل المطالبة، حيث يسمح القانون بذلك."]
        },
        {
          heading: "التعويض",
          body: ["توافق على تعويضنا عن أي مطالبات ناتجة عن استخدامك للخدمات أو خرقك لهذه الشروط."]
        },
        {
          heading: "بيانات المستخدم",
          body: ["قد نحتفظ ببيانات مرتبطة بالأداء؛ أنت مسؤول عن نسخك الاحتياطية."]
        },
        {
          heading: "الاتصالات الإلكترونية",
          body: ["توافق على الاتصالات والتوقيعات الإلكترونية."]
        },
        {
          heading: "أحكام عامة",
          body: ["تشكل هذه الشروط الاتفاق الكامل. إذا كان أي بند غير قابل للتنفيذ، يظل الباقي سارياً."]
        },
        {
          heading: "اتصل بنا",
          body: ["IA Forma، 1325 Rue Cartier Saint-Laurent، مونتريال (كيبيك) H4L 2N6، كندا. الهاتف: (514) 515-4492. البريد: administration@avernisouriant.com."]
        }
      ]
    }
  };

  const content = termsContent[(lang as keyof typeof termsContent) ?? "en"] || termsContent.en;

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent text-4xl md:text-5xl font-bold">
              {content.title}
            </h1>
            <p className="text-muted-foreground">{content.updated}</p>
            <p className="text-muted-foreground text-sm mt-2">{content.notice}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4" style={{ maxWidth: "900px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10 text-foreground"
          >
            {content.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-xl font-semibold">{section.heading}</h3>
                {section.body.map((para, pIdx) => (
                  <p key={pIdx} className="text-sm text-muted-foreground leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
