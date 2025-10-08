import { ArrowRight, Code2, Rocket } from 'lucide-react';
import Countdown from './CountDown';

interface HeroProps {
  onCTAClick: () => void;
}

export default function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Countdown />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Стань JavaScript-разработчиком за{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                8 месяцев
              </span>{' '}
              и начни создавать свои {''}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400">
                стартапы
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Изучи React, Node.js и проектный менеджмент, чтобы создавать
              стартапы и продукты, которые меняют мир
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onCTAClick}
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl shadow-blue-500/25"
              >
                Записаться на бесплатный вебинар
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img
                    src="/logo.png"
                    className="w-5 h-5 rounded-full"
                    alt=""
                  />
                </div>
                <span className="text-slate-300 ">
                  50+ студентов уже прокачали инженерное мышление и создали
                  первые проекты
                </span>
              </div>
              {/* <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-slate-300">4.9/5 рейтинг</span>
              </div> */}
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <Code2 className="w-6 h-6 text-blue-400" />
                  <span className="text-slate-400 font-mono text-sm">
                    index.tsx
                  </span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div className="text-slate-500">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-300">developer</span>{' '}
                    <span className="text-slate-400">=</span>{' '}
                    <span className="text-cyan-400">{'{'}</span>
                  </div>
                  <div className="text-slate-500 pl-4">
                    <span className="text-blue-300">skills</span>
                    <span className="text-slate-400">:</span>{' '}
                    <span className="text-green-400">
                      ['React', 'Node.js', 'PM base']
                    </span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="text-slate-500 pl-4">
                    <span className="text-blue-300">mindset</span>
                    <span className="text-slate-400">:</span>{' '}
                    <span className="text-green-400">'engineering'</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="text-slate-500 pl-4">
                    <span className="text-blue-300">future</span>
                    <span className="text-slate-400">:</span>{' '}
                    <span className="text-green-400">'unlimited'</span>
                  </div>
                  <div className="text-cyan-400">{'};'}</div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3">
                <div className="font-bold">80% выпускников</div>
                <div className="text-xs">создают продукты</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg shadow-xl transform -rotate-3">
              <div className="font-bold text-lg">4 проекта</div>
              <div className="text-sm opacity-90">в портфолио</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </section>
  );
}
