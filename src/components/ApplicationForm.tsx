import { useState } from 'react'
import { X, Send, User, Phone } from 'lucide-react'

interface ApplicationFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function ApplicationForm({
  isOpen,
  onClose,
}: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Отправляем только имя и телефон
      await fetch('https://api.comtehno.kg/ustaz/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
        }),
      })
    } catch (error) {
      console.error('Ошибка при отправке заявки:', error)
    }

    // Имитируем плавную анимацию завершения
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      onClose()
      setFormData({ name: '', phone: '' })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom-4">
        <div className="sticky top-0 bg-gradient-to-br from-slate-900 to-blue-900 text-white px-6 py-5 flex items-center justify-between rounded-t-3xl">
          <h2 className="text-2xl font-bold">Записаться на вебинар</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Заявка отправлена!
              </h3>
              <p className="text-slate-600 text-lg">
                Мы свяжемся с вами в течение 24 часов и отправим ссылку на
                вебинар
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-slate-600 text-lg leading-relaxed">
                  Заполните форму, и мы отправим вам ссылку на бесплатный
                  вводный вебинар. На нем вы узнаете все о курсе и сможете
                  задать любые вопросы.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Ваше имя *
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-900"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Телефон *
                    </span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-900"
                    placeholder="+996 (___) ___-___"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:from-slate-400 disabled:to-slate-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] disabled:scale-100 flex items-center justify-center gap-2 shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      Отправить заявку
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  и обработкой персональных данных
                </p>
              </form>

              <div className="mt-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                <h4 className="font-bold text-slate-900 mb-3">Что дальше?</h4>
                <ol className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      1
                    </span>
                    <span>Мы свяжемся с вами для подтверждения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      2
                    </span>
                    <span>Отправим ссылку на вебинар за день до начала</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      3
                    </span>
                    <span>Встретимся онлайн и ответим на все вопросы</span>
                  </li>
                </ol>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
