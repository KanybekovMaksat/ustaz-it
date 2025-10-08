import { AlertTriangle, TrendingDown, Brain, Zap } from 'lucide-react';

export default function ProblemInsight() {
  const stats = [
    {
      icon: TrendingDown,
      stat: '47%',
      label: 'профессий исчезнут к 2030',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Zap,
      stat: '85%',
      label: 'компаний нанимают удаленно',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Brain,
      stat: 'Сможете',
      label: 'создать собственный стартап',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <AlertTriangle className="w-4 h-4" />
            Мир меняется быстрее, чем когда-либо
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Почему важно действовать{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              сейчас
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Автоматизация уничтожает старые профессии. Выживают те, кто быстро
            учится, адаптируется и создает новое.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6`}
              >
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <div
                className={`text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}
              >
                {item.stat}
              </div>
              <p className="text-slate-600 font-medium">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Инженерное мышление — навык будущего
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Мы не просто учим писать код. Мы развиваем способность системно
                мыслить, решать сложные задачи и создавать продукты, которые
                изменят мир.
              </p>
              <ul className="space-y-3">
                {[
                  'Системное мышление для решения сложных задач',
                  'Критическое и аналитическое мышление',
                  'Креативность в технических и бизнес-задачах',
                  'Гибкость и адаптация к новым технологиям',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
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
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
              {/* <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-slate-400 text-sm">Видео: Какие профессии исчезнут к 2030 году</p>
                </div>
              </div> */}
              <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                <iframe
                  src="https://www.canva.com/design/DAG0LI_J6lY/pFUfX7N7UIUj2hmQJ8Mw-Q/view?embed"
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>

              {/* <p className="text-slate-400 text-sm text-center">
                3 минуты о том, почему программирование и инженерное мышление — ваш ключ к будущему
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
