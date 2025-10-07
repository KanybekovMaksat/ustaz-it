import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Подойдёт ли курс, если я полный новичок?',
      answer: 'Да, курс рассчитан на людей без опыта в программировании. Мы начинаем с основ и постепенно переходим к более сложным темам. Главное — ваше желание учиться и готовность уделять минимум 10-15 часов в неделю.',
    },
    {
      question: 'Сколько часов в неделю нужно учиться?',
      answer: 'Рекомендуем уделять минимум 10-15 часов в неделю: 4-6 часов на просмотр лекций и теории, 6-9 часов на практические задания. В периоды работы над проектами может потребоваться больше времени, но график гибкий.',
    },
    {
      question: 'Что если не смогу оплачивать дальше?',
      answer: 'Мы предлагаем гибкую систему оплаты и рассрочку. Также есть возможность приостановить обучение на месяц по уважительной причине. Обсудите вашу ситуацию с менеджером — мы всегда идем навстречу.',
    },
    {
      question: 'Даете ли сертификат?',
      answer: 'Да, после успешного завершения курса и защиты финального проекта вы получите сертификат. Однако главная ценность — это портфолио из 4 реальных проектов, которое вы покажете работодателям.',
    },
    {
      question: 'Помогаете ли с трудоустройством?',
      answer: 'Мы предоставляем карьерную поддержку: помощь в составлении резюме, подготовка к собеседованиям, рекомендации по поиску работы. У нас есть партнерские компании, которые регулярно ищут джуниор-разработчиков. 80% наших выпускников находят работу в течение 3 месяцев после окончания.',
    },
    {
      question: 'Какой формат обучения?',
      answer: 'Онлайн-формат с живыми вебинарами 2-3 раза в неделю, записями всех занятий, практическими заданиями и проектами. У вас будет доступ к платформе 24/7, чат с преподавателями и студентами, персональный наставник для код-ревью.',
    },
    {
      question: 'Смогу ли я совмещать с работой/учёбой?',
      answer: 'Да, многие наши студенты успешно совмещают курс с работой или учёбой. Все занятия записываются, поэтому вы можете учиться в удобное время. Главное — выделять регулярно время на практику и дедлайны проектов.',
    },
    {
      question: 'Что делать, если я отстану?',
      answer: 'Все материалы остаются доступны, есть записи занятий. Вы можете задавать вопросы в чате или назначить дополнительную консультацию с наставником. Мы заинтересованы в вашем успехе и поможем наверстать упущенное.',
    },
    {
      question: 'Нужен ли мощный компьютер?',
      answer: 'Нет, подойдет любой компьютер последних 5 лет с 8GB RAM. Вся разработка идет в браузере и легких редакторах кода. Главное — стабильный интернет для участия в вебинарах.',
    },
    {
      question: 'Чем ваш курс отличается от других?',
      answer: 'Мы фокусируемся не только на технических навыках, но и на развитии инженерного мышления и предпринимательских компетенций. Вы не просто учитесь писать код, но и понимаете, как создавать продукты, работать в команде и запускать стартапы. Плюс персональное наставничество и активное комьюнити.',
    },
  ];

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Часто задаваемые{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              вопросы
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            Ответы на самые популярные вопросы о курсе
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/50 transition-colors"
              >
                <span className="font-semibold text-lg text-slate-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-slate-700 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Остались вопросы?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Запишитесь на бесплатный вводный вебинар, где мы подробно расскажем о курсе и ответим на все ваши вопросы
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-500/25">
            Записаться на вебинар
          </button>
        </div>
      </div>
    </section>
  );
}
