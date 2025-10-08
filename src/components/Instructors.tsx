import { Linkedin, Github, Award, Code2, Users, Briefcase } from 'lucide-react'
import RamzanPhoto from ''

export default function Instructors() {
  const instructors = [
    {
      name: 'Рамзан Малабакиев',
      role: 'Javascript Developer & It Mentor',
      avatar: '/ramzan.jpg',
      experience: '8+ лет в IT',
      company: 'Tech Leadership',
      skills: ['React.js', 'Typescript', 'Team Leadership'],
      description:
        'Опыт запуска продуктов и управления командами. Фокусируюсь на развитии инженерного мышления и предпринимательских навыков.',
      highlights: [
        'Выпускник Accelerate Prosperity',
        'Обучаю на протяжении 3 лет',
        'Создал 10+ коммерчиских проектах',
      ],
      socialMedia: {
        Linkedin:
          'https://www.linkedin.com/in/%D1%80%D0%B0%D0%BC%D0%B7%D0%B0%D0%BD-%D0%BC%D0%B0%D0%BB%D0%B0%D0%B1%D0%B0%D0%BA%D0%B8%D0%B5%D0%B2-1a5587266/',
        Github: 'https://github.com/ma1abakiev',
      },
    },
    {
      name: 'Максат Каныбеков',
      role: 'Product Manager & Frontend Developer',
      avatar: '👨‍💻',
      experience: '10+ лет в Backend',
      company: 'Enterprise Solutions',
      skills: ['Node.js', 'Agile', 'Product Management'],
      description:
        'Опыт запуска продуктов и управления командами. Фокусируюсь на развитии инженерного мышления и предпринимательских навыков.',
      highlights: [
        'Запустил 3 успешных продукта',
        'Руководил командой из 5+ разработчиков',
        'Спикер на технических конференциях',
      ],
      socialMedia: {
        Linkedin: '',
        Github: '',
      },
    },
  ]

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Учись у{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              практикующих экспертов
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Наши преподаватели — это не просто учителя, а действующие
            специалисты с реальным опытом
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200 hover:shadow-2xl transition-all"
            >
              <div className="flex items-start gap-6 mb-8">
                <img
                  className="w-[75px] h-[75px] rounded-full object-cover"
                  src={instructor.avatar}
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {instructor.name}
                  </h3>
                  <p className="text-lg text-slate-600 mb-2">
                    {instructor.role}
                  </p>
                  {/* <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{instructor.experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      <span>{instructor.company}</span>
                    </div>
                  </div> */}
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mb-6">
                {instructor.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-blue-500" />
                  Специализация
                </h4>
                <div className="flex flex-wrap gap-2">
                  {instructor.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 text-blue-700 rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-green-500" />
                  Достижения
                </h4>
                <ul className="space-y-2">
                  {instructor.highlights.map((highlight, highlightIndex) => (
                    <li
                      key={highlightIndex}
                      className="flex items-start gap-2 text-slate-700"
                    >
                      <span className="text-green-500 font-bold">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors">
                  <Linkedin className="w-4 h-4" />
                  <a
                    target="_blank"
                    href={instructor.socialMedia.Linkedin}
                    className="text-sm font-medium"
                  >
                    LinkedIn
                  </a>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors">
                  <Github className="w-4 h-4" />
                  <a
                    target="_blank"
                    href={instructor.socialMedia.Github}
                    className="text-sm font-medium"
                  >
                    GitHub
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Мы обучаем не профессии — мы обучаем мышлению
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Наша миссия — развить в каждом студенте способность мыслить как
                инженер и действовать как предприниматель. Технологии меняются,
                но способность учиться и создавать остается навсегда.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span>Персональный наставник</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                  <Award className="w-5 h-5 text-green-400" />
                  <span>Код-ревью каждого проекта</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-4">
                Что входит в наставничество
              </h4>
              <ul className="space-y-3">
                {[
                  'Еженедельные 1-на-1 сессии',
                  'Ревью кода и обратная связь',
                  'Помощь с карьерными вопросами',
                  'Поддержка после выпуска',
                  'Доступ к комьюнити выпускников',
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
          </div>
        </div>
      </div>
    </section>
  )
}
