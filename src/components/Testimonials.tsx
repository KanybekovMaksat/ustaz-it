import { Quote, Star, Briefcase, TrendingUp } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ормон Мамбеткулов',
      role: 'Frontend Developer',
      company: 'Comtehno',
      avatar: '',
      text: 'Курс полностью изменил мой подход к программированию. Я не просто научился писать код, но и понял, как мыслить системно. Сейчас работаю в стартапе и создаю свой проект.',
      achievement: 'Нашел работу после выпуска',
    },
    {
      name: 'Жоомарт Алмазбеков',
      role: 'Full-Stack Developer',
      company: 'O mobile',
      avatar: '👩‍💻',
      text: 'Особенно ценю блок по инженерному мышлению. Это помогло мне не только в программировании, но и в повседневной жизни. Проекты в портфолио сыграли ключевую роль при трудоустройстве.',
      achievement: '',
    },
    {
      name: 'Адахан',
      role: 'Junior Developer',
      company: 'IT Company',
      avatar: '👨‍🎓',
      text: 'До курса я был полным новичком. Преподаватели объясняли все настолько понятно, что я быстро влился в процесс. Командная работа над проектами — бесценный опыт.',
      achievement: 'Начал карьеру с нуля',
    },

  ];

  const stats = [
    {
      value: '80%',
      label: 'выпускников нашли работу',
      icon: Briefcase,
    },
    {
      value: '250+',
      label: 'успешных выпускников',
      icon: TrendingUp,
    },
    {
      value: '4.9/5',
      label: 'средняя оценка курса',
      icon: Star,
    },
  ];

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Что говорят наши{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              выпускники
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Реальные истории людей, которые изменили свою жизнь благодаря обучению
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">{testimonial.avatar}</div>
                <div className="flex-1">
                  <h4 className="font-bold text-md text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-600">{testimonial.role}</p>
                  <p className="text-sm text-slate-500">{testimonial.company}</p>
                </div>
                <Quote className="w-8 h-8 text-blue-200" />
              </div>

              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mb-6">{testimonial.text}</p>

              {/* <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg px-4 py-3">
                <p className="text-sm text-green-700 font-semibold flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  {testimonial.achievement}
                </p>
              </div> */}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-slate-900" />
                </div>
                <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {stat.value}
                </div>
                <p className="text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Примеры проектов выпускников</h3>
              <p className="text-slate-300 mb-6">
                Все проекты доступны на GitHub с полной документацией и демо-версиями
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {['Платформа Tanda', 'Ai Фитнес-тренер', 'Социальная сеть'].map((project, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="aspect-video bg-slate-800 rounded-lg mb-3 flex items-center justify-center">
                      <svg className="w-8 h-8 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold">{project}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
