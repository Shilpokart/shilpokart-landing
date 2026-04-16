import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src="/logo-icon.svg" alt="Shilpokart" className="h-8 w-8" />
              <span className="text-lg font-extrabold">
                <span className="text-brand">Shilpo</span>
                <span className="text-white">kart</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.about')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.contact')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.categories')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.electrical')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.plumbing')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.tools')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.building')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}
