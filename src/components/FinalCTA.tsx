import { ArrowRight, Clock, Users, Gift, Coins } from 'lucide-react'
import { useEffect, useState } from 'react'

interface FinalCTAProps {
  onCTAClick: () => void
}

function Countdown() {
  // 🎯 Целевая дата (3 ноября 2025)
  const targetDate = new Date('2025-11-03T00:00:00')

  const [timeLeft, setTimeLeft] = useState({ days: 0 })

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const diff = targetDate.getTime() - now.getTime()

      if (diff <= 0) {
        setTimeLeft({ days: 0 })
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      setTimeLeft({ days })
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <>
      {timeLeft.days} {getDayWord(timeLeft.days)}
    </>
  )
}

function getDayWord(n: number) {
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod10 === 1 && mod100 !== 11) return 'день'
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return 'дня'
  return 'дней'
}

export default function FinalCTA({ onCTAClick }: FinalCTAProps) {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-4 py-2 text-sm font-semibold mb-8 animate-pulse">
            <Clock className="w-4 h-4" />
            <span>Ограниченное предложение</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Начни свой путь в{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              IT прямо сейчас
            </span>
          </h2>

          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Пройди бесплатный вводный вебинар и реши, подходит ли тебе путь
            JavaScript-разработчика
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Gift className="w-7 h-7 text-slate-900" />
            </div>
            <h3 className="font-bold text-lg mb-2">
              Бонус за раннюю регистрацию
            </h3>
            <p className="text-slate-300 text-sm">
              Скидка 15% при оплате в течение 3 дней после вебинара
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-7 h-7 text-slate-900" />
            </div>
            <h3 className="font-bold text-lg mb-2">Всего 10 мест</h3>
            <p className="text-slate-300 text-sm">
              Мы работаем с небольшими группами для лучшего качества
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-slate-900" />
            </div>
            <h3 className="font-bold text-lg mb-2">
              Старт через <Countdown /> дней
            </h3>
            <p className="text-slate-300 text-sm">
              Успей подготовиться и начать учиться вместе с группой
            </p>
          </div>
        </div>

        {/* 💰 Блок о цене курса */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center mb-16">
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
              <Coins className="w-7 h-7 text-slate-900" />
            </div>
            <h3 className="text-2xl font-bold text-white mt-2">
              Стоимость курса
            </h3>
            <p className="text-slate-300 text-lg">
              <span className="font-semibold text-white">8 000 сом</span> за
              месяц обучения
            </p>
            <p className="text-slate-300 text-sm">
              При хорошем обучении —{' '}
              <span className="text-emerald-400 font-semibold">скидка 20%</span>
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Что будет на бесплатном вебинаре?
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-left mb-8 max-w-2xl mx-auto">
              {[
                'Разбор программы курса и проектов',
                'Карьерные перспективы в IT',
                'Демо-урок по JavaScript',
                'Ответы на все твои вопросы',
                'Знакомство с преподавателями',
                'Как быстро освоить инженерное мышление',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-slate-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onCTAClick}
              className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-2xl shadow-blue-500/25 mx-auto"
            >
              Записаться на бесплатный вебинар
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-slate-400 text-sm mt-6">
              Вебинар пройдет онлайн. После регистрации вы получите ссылку на
              телеграм или ватсап.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 text-sm text-slate-300">
            {['Без спама', 'Полностью бесплатно', 'Без обязательств'].map(
              (text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{text}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
