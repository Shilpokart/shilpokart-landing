import { useTranslation } from 'react-i18next'

const stepIcons = [
  <svg key="reg" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
  <svg key="browse" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
  <svg key="order" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>,
]

export default function HowItWorks() {
  const { t } = useTranslation()

  const steps = [
    { icon: stepIcons[0], num: '১', numEn: '1', ...{ title: t('howItWorks.step1.title'), desc: t('howItWorks.step1.desc') } },
    { icon: stepIcons[1], num: '২', numEn: '2', ...{ title: t('howItWorks.step2.title'), desc: t('howItWorks.step2.desc') } },
    { icon: stepIcons[2], num: '৩', numEn: '3', ...{ title: t('howItWorks.step3.title'), desc: t('howItWorks.step3.desc') } },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-4">
          {t('howItWorks.title')}
        </h2>
        <p className="text-center text-gray-600 mb-14 text-lg">
          {t('howItWorks.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-brand/30 to-brand/10" />
              )}

              <div className="relative z-10 w-20 h-20 rounded-full bg-brand text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand/25">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
