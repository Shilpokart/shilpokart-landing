import { useTranslation } from 'react-i18next'

export default function CTASection() {
  const { t } = useTranslation()

  return (
    <section id="cta" className="py-20 md:py-28 bg-gradient-to-br from-brand to-brand-dark">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          {t('cta.title')}
        </h2>
        <p className="text-lg text-white/80 mb-10">
          {t('cta.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-brand font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
          >
            {t('cta.trader')}
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-brand transition-colors"
          >
            {t('cta.seller')}
          </a>
        </div>
      </div>
    </section>
  )
}
