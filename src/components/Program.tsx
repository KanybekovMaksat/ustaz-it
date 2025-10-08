import {
  CheckCircle2,
  Code,
  Server,
  LayoutGrid as Layout,
  Lightbulb,
  Rocket,
  Users,
  Trophy,
  Atom,
  ServerCrash,
} from 'lucide-react'

export default function Program() {
  const months = [
    {
      number: 1,
      title: 'HTML и CSS',
      topics: [
        'Структура HTML-документа',
        'Стилизация с помощью CSS',
        'Блочная модель',
        'Flexbox и адаптивная верстка',
      ],
      icon: Layout,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: 2,
      title: 'Основы JavaScript',
      topics: [
        'Переменные и типы данных',
        'Условия и циклы',
        'Функции',
        'Работа с массивами и объектами',
      ],
      icon: Code,
      color: 'from-cyan-500 to-teal-500',
    },
    {
      number: 3,
      title: 'Продвинутый JavaScript',
      topics: [
        'DOM-манипуляции',
        'События и работа с формами',
        'Асинхронность и Fetch API',
        'ES6+ возможности',
      ],
      icon: Lightbulb,
      color: 'from-teal-500 to-green-500',
    },
    {
      number: 4,
      title: 'React.js — основы',
      topics: [
        'Компоненты и Props',
        'State и события',
        'JSX и списки',
        'Работа с формами',
      ],
      icon: Atom,
      color: 'from-sky-500 to-sky-800',
    },
    {
      number: 5,
      title: 'React.js — продвинутый уровень',
      topics: [
        'React Router',
        'Hooks (useEffect, useContext и др.)',
        'Управление состоянием (Context, Redux)',
        'Архитектура и структура проекта',
      ],
      icon: Rocket,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      number: 6,
      title: 'Node.js — основы',
      topics: [
        'Введение в Backend-разработку',
        'Создание сервера с Express.js',
        'Маршрутизация и middleware',
        'Работа с файлами и JSON',
      ],
      icon: Server,
      color: 'from-teal-500 to-blue-500',
    },
    {
      number: 7,
      title: 'Node.js — продвинутый уровень',
      topics: [
        'REST API и базы данных (MongoDB)',
        'Аутентификация и авторизация',
        'Работа с внешними API',
        'Деплой backend-приложений',
      ],
      icon: ServerCrash,
      color: 'from-blue-500 to-purple-500',
    },
    {
      number: 8,
      title: 'Финальный проект и проектный менеджмент',
      topics: [
        'Agile и Scrum методологии',
        'Планирование и командная работа',
        'Разработка финального проекта (Fullstack)',
        'Презентация и защита проекта',
      ],
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  const projects = [
    {
      title: 'Лендинг образовательного центра',
      description:
        'Одностраничный сайт с адаптивной версткой, современным дизайном и формой обратной связи',
      tech: ['HTML', 'CSS'],
    },
    {
      title: 'Интернет-магазин ресторана',
      description:
        'Онлайн-платформа для выбора блюд с меню и добавления блюда в меню',
      tech: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Киносайт',
      description:
        'Приложение с каталогом фильмов, поиском и рейтингами на основе данных из публичного API',
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      title: 'Стартап MVP',
      description:
        'Твой собственный fullstack-проект — от идеи до реализации и презентации продукта',
      tech: ['HTML', 'CSS', 'JavaScript', 'React', 'MongoDB'],
    },
  ]

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            8 месяцев обучения —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              шаг за шагом к профессии
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Структурированная программа от основ до создания собственного
            стартапа
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {months.map((month, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-200 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${month.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <month.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm font-semibold text-slate-500">
                  Месяц {month.number}
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-4">
                {month.title}
              </h3>

              <ul className="space-y-2">
                {month.topics.map((topic, topicIndex) => (
                  <li
                    key={topicIndex}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Проекты, которые ты создашь
            </h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Каждый проект добавляется в твое портфолио и демонстрирует
              реальные навыки работодателям
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors"
              >
                <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2 text-green-300 text-sm font-semibold mb-4">
              <Trophy className="w-4 h-4" />
              Финальное достижение
            </div>
            <h4 className="text-2xl font-bold mb-2">
              Портфолио готово к показу работодателям
            </h4>
            <p className="text-slate-300">
              4 завершенных проекта, размещенных на GitHub с полной
              документацией
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
