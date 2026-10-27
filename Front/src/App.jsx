import { useState } from 'react'
import {
  Activity, ArrowLeft, ArrowUpLeft, Baby, CheckCircle2, ChevronDown,
  Clock3, HeartPulse, Menu, Microscope, Phone, ShieldCheck, Stethoscope,
  Syringe, TestTube2, UsersRound, X, MapPin, Facebook, Mail, CalendarDays
} from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'الاستشارات الطبية',
    description: 'استفسر عن خدمات الرعاية الطبية المناسبة لك من خلال فريق المركز.',
  },
  {
    icon: Syringe,
    title: 'التطعيمات والحقن',
    description: 'خدمات التطعيم والحقن وفق المواعيد والإجراءات المعتمدة بالمركز.',
  },
  {
    icon: Microscope,
    title: 'التحاليل والفحوصات',
    description: 'خدمات تشخيصية تشمل التحاليل الطبية والفحوصات المتاحة بالمركز.',
  },
  {
    icon: Activity,
    title: 'الفحوصات التشخيصية',
    description: 'تشمل الخدمات المنشورة بالمركز الأشعة، والسونار، ورسم القلب.',
  },
]

const quickLinks = [
  { label: 'الخدمات', href: '#services' },
  { label: 'عن المركز', href: '#about' },
  { label: 'خطوات التواصل', href: '#contact' },
]

function BrandLogo() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="عيادات بدر - الصفحة الرئيسية">
      <img
        src="/buc-family-health-center-logo.jpg"
        alt="شعار مركز صحة الأسرة بجامعة بدر"
        className="h-[58px] w-[122px] rounded-lg object-contain bg-white"
        onError={(event) => { event.currentTarget.style.display = 'none' }}
      />
      <span className="hidden border-r border-slate-200 pr-3 sm:block">
        <span className="block text-sm font-extrabold text-brand-900">عيادات بدر</span>
        <span className="mt-1 block text-xs font-semibold text-slate-500">مؤسسة جامعة بدر التخصصية</span>
      </span>
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', service: 'استفسار عام' })
  const [notice, setNotice] = useState('')

  const submitForm = (event) => {
    event.preventDefault()
    const message = `مرحبًا، أريد الاستفسار عن خدمات عيادات بدر.%0Aالاسم: ${encodeURIComponent(form.name)}%0Aرقم التواصل: ${encodeURIComponent(form.phone)}%0Aنوع الاستفسار: ${encodeURIComponent(form.service)}`
    // Opens WhatsApp with a prefilled message only; it does not submit or store patient information.
    window.open(`https://wa.me/201274991103/?text=${message}`, '_blank', 'noopener,noreferrer')
    setNotice('تم تجهيز رسالة الاستفسار. أرسلها من واتساب بعد مراجعتها.')
  }

  return (
    <div id="home" className="min-h-screen overflow-hidden bg-white text-slate-800">
      <div className="bg-brand-900 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-2 text-xs sm:flex-row sm:px-6 lg:px-8">
          <p className="flex items-center gap-2 text-center sm:text-right">
            <ShieldCheck size={15} />
            رعايتك الصحية تبدأ من خطوة مطمئنة
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <a className="inline-flex items-center gap-1.5 hover:text-brand-200" href="tel:01274991103"><Phone size={13} /> 01274991103</a>
            <a className="inline-flex items-center gap-1.5 hover:text-brand-200" href="tel:01284193783"><Phone size={13} /> 01284193783</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <BrandLogo />
          <nav className="hidden items-center gap-8 md:flex" aria-label="القائمة الرئيسية">
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-bold text-slate-600 transition hover:text-brand-700">
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden items-center gap-2 rounded-full bg-brand-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-700/20 transition hover:-translate-y-0.5 hover:bg-brand-800 md:inline-flex">
            تواصل معنا <ArrowLeft size={16} />
          </a>
          <button
            type="button"
            className="rounded-xl border border-slate-200 p-2 text-brand-900 md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-slate-100 bg-white px-4 py-3 md:hidden">
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-3 font-bold text-slate-700 hover:bg-brand-50">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-2 block rounded-lg bg-brand-700 px-3 py-3 text-center font-bold text-white">تواصل معنا</a>
          </nav>
        )}
      </header>

      <main>
        <section className="relative isolate">
          <div className="absolute inset-0 -z-20 bg-gradient-to-l from-brand-50 via-white to-white" />
          <div className="absolute -left-24 top-12 -z-10 h-72 w-72 rounded-full bg-brand-100/70 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:py-20 lg:grid-cols-[1.03fr_.97fr] lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-2 text-xs font-extrabold text-brand-800 shadow-sm sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                عيادات مؤسسة جامعة بدر التخصصية
              </div>
              <h1 className="text-4xl font-extrabold leading-[1.45] tracking-tight text-brand-950 sm:text-5xl lg:text-[3.6rem]">
                رعاية أقرب لك،
                <span className="block text-brand-600">واطمئنان يبدأ من هنا</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                نهتم بتسهيل وصولك إلى الخدمات الصحية. تعرّف على الخدمات المتاحة وتواصل مع المركز للاستفسار عن المواعيد والتفاصيل.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-7 py-4 font-extrabold text-white shadow-xl shadow-brand-700/20 transition hover:-translate-y-0.5 hover:bg-brand-800">
                  تواصل للاستفسار <ArrowLeft size={18} />
                </a>
                <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-200 bg-white px-7 py-4 font-extrabold text-brand-800 transition hover:bg-brand-50">
                  استكشف الخدمات <ArrowDownIcon />
                </a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
                <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-brand-600" /> معلومات واضحة عن الخدمات</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-brand-600" /> تواصل مباشر مع المركز</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-3xl border border-brand-200" />
              <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full bg-brand-100" />
              <div className="relative overflow-hidden rounded-[2rem] border-[7px] border-white bg-brand-100 shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=85"
                  alt="فريق طبي يقدم الرعاية الصحية"
                  className="h-[330px] w-full object-cover sm:h-[430px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/65 via-transparent to-transparent" />
                <div className="absolute bottom-0 right-0 left-0 p-6 text-white sm:p-8">
                  <p className="text-sm font-bold text-brand-100">مركز صحة الأسرة</p>
                  <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">صحتك تستحق الاهتمام</h2>
                  <p className="mt-2 max-w-sm text-sm leading-7 text-white/85">تواصل معنا لمعرفة الخدمة المناسبة وخطوات الزيارة.</p>
                </div>
              </div>
              <div className="absolute -right-2 top-8 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:flex">
                <span className="rounded-xl bg-brand-50 p-3 text-brand-700"><HeartPulse size={23} /></span>
                <span><b className="block text-sm text-slate-800">اهتمام بصحتك</b><small className="mt-1 block text-slate-500">من أول استفسار</small></span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-soft sm:grid-cols-3">
            <div className="flex items-center gap-4 border-b border-brand-100 p-5 sm:border-b-0 sm:border-l sm:p-6">
              <span className="rounded-2xl bg-brand-50 p-3 text-brand-700"><MapPin size={24} /></span>
              <div><p className="font-extrabold text-brand-950">مدينة بدر</p><p className="mt-1 text-sm text-slate-500">القاهرة، مصر</p></div>
            </div>
            <div className="flex items-center gap-4 border-b border-brand-100 p-5 sm:border-b-0 sm:border-l sm:p-6">
              <span className="rounded-2xl bg-brand-50 p-3 text-brand-700"><Phone size={24} /></span>
              <div><p className="font-extrabold text-brand-950">تواصل هاتفي</p><p className="mt-1 text-sm text-slate-500">للاستفسار عن الخدمات</p></div>
            </div>
            <div className="flex items-center gap-4 p-5 sm:p-6">
              <span className="rounded-2xl bg-brand-50 p-3 text-brand-700"><UsersRound size={24} /></span>
              <div><p className="font-extrabold text-brand-950">خدمات صحية متنوعة</p><p className="mt-1 text-sm text-slate-500">اسأل عن الخدمة المتاحة</p></div>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 bg-slate-50/80 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-extrabold text-brand-600">الخدمات الصحية</span>
              <h2 className="mt-3 text-3xl font-extrabold text-brand-950 sm:text-4xl">خدمات تساعدك تهتم بصحتك</h2>
              <p className="mt-4 leading-8 text-slate-600">تعرّف على أمثلة من الخدمات المنشورة للمركز، وتواصل معنا للتأكد من توافر الخدمة ومواعيدها.</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, title, description }) => (
                <article key={title} className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-700 group-hover:text-white">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-6 text-lg font-extrabold text-brand-950">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                  <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-brand-700 hover:text-brand-900">
                    استفسر عن الخدمة <ArrowLeft size={15} />
                  </a>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-6 text-slate-500">تُعرض هذه المعلومات للتعريف بالخدمات فقط؛ يرجى التواصل مع المركز لتأكيد الخدمات المتاحة حاليًا ومواعيد تقديمها.</p>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="relative overflow-hidden rounded-[2rem] bg-brand-100">
              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=85"
                alt="تجهيزات الرعاية الطبية"
                className="h-[300px] w-full object-cover sm:h-[390px]"
                loading="lazy"
              />
            </div>
            <div>
              <span className="text-sm font-extrabold text-brand-600">عن المركز</span>
              <h2 className="mt-3 text-3xl font-extrabold leading-relaxed text-brand-950 sm:text-4xl">تجربة تواصل أوضح لرحلتك الصحية</h2>
              <p className="mt-4 leading-8 text-slate-600">
                يوفّر مركز عيادات بدر خدمات صحية وتشخيصية متنوعة وفق المعلومات المنشورة عن المركز. هدف هذه الصفحة أن تساعدك على معرفة الخدمات وطرق التواصل قبل الزيارة.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-brand-600" size={20} />
                  <p className="leading-7 text-slate-700">اسأل عن الخدمة المناسبة قبل التوجه إلى المركز.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-brand-600" size={20} />
                  <p className="leading-7 text-slate-700">تأكد هاتفيًا من المواعيد والمتطلبات وأي مستندات لازمة.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-brand-600" size={20} />
                  <p className="leading-7 text-slate-700">للحالات الطارئة، توجّه إلى أقرب قسم طوارئ بدل انتظار الرد على استفسار إلكتروني.</p>
                </div>
              </div>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 font-extrabold text-white transition hover:bg-brand-800">
                طرق التواصل <ArrowLeft size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-l from-brand-900 to-brand-700 py-14 text-white sm:py-16">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:text-right lg:px-8">
            <div>
              <p className="text-sm font-bold text-brand-200">هل لديك استفسار؟</p>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">فريقنا بانتظار تواصلك</h2>
              <p className="mt-3 text-sm leading-7 text-white/75">اتصل للاستفسار عن الخدمات والمواعيد المتاحة.</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href="tel:01274991103" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-extrabold text-brand-900 transition hover:bg-brand-50"><Phone size={18} /> 01274991103</a>
              <a href="tel:01284193783" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-4 font-extrabold text-white transition hover:bg-white/10"><Phone size={18} /> 01284193783</a>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
            <div>
              <span className="text-sm font-extrabold text-brand-600">تواصل معنا</span>
              <h2 className="mt-3 text-3xl font-extrabold text-brand-950 sm:text-4xl">خلّي استفسارك أول خطوة</h2>
              <p className="mt-4 leading-8 text-slate-600">يمكنك الاتصال مباشرة أو تجهيز رسالة استفسار عبر واتساب. النموذج لا يحفظ بياناتك على الموقع.</p>
              <div className="mt-8 space-y-5">
                <a href="tel:01274991103" className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4 transition hover:border-brand-200 hover:bg-brand-50/50">
                  <span className="rounded-xl bg-brand-50 p-3 text-brand-700"><Phone size={22} /></span>
                  <span><small className="block text-slate-500">الهاتف الأول</small><b dir="ltr" className="mt-1 block text-lg text-brand-950">01274991103</b></span>
                </a>
                <a href="tel:01284193783" className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4 transition hover:border-brand-200 hover:bg-brand-50/50">
                  <span className="rounded-xl bg-brand-50 p-3 text-brand-700"><Phone size={22} /></span>
                  <span><small className="block text-slate-500">الهاتف الثاني</small><b dir="ltr" className="mt-1 block text-lg text-brand-950">01284193783</b></span>
                </a>
                <div className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4">
                  <span className="rounded-xl bg-brand-50 p-3 text-brand-700"><MapPin size={22} /></span>
                  <span><small className="block text-slate-500">الموقع</small><b className="mt-1 block text-brand-950">مدينة بدر، القاهرة، مصر</b></span>
                </div>
                <a href="https://www.facebook.com/share/1dS7ABkTEV/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-extrabold text-brand-700 hover:text-brand-900"><Facebook size={19} /> تابع صفحة المركز على فيسبوك <ArrowUpLeft size={16} /></a>
              </div>
            </div>

            <form onSubmit={submitForm} className="rounded-[2rem] border border-brand-100 bg-brand-50/60 p-5 sm:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-extrabold text-brand-950">جهّز رسالة استفسار</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">املأ البيانات الأساسية لفتح رسالة واتساب ومراجعتها قبل الإرسال.</p>
              </div>
              <label className="mb-2 block text-sm font-bold text-slate-700" htmlFor="name">الاسم</label>
              <input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mb-5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100" placeholder="اكتب اسمك" />
              <label className="mb-2 block text-sm font-bold text-slate-700" htmlFor="phone">رقم للتواصل</label>
              <input id="phone" required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mb-5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100" placeholder="01xxxxxxxxx" dir="rtl" />
              <label className="mb-2 block text-sm font-bold text-slate-700" htmlFor="service">نوع الاستفسار</label>
              <div className="relative">
                <select id="service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="mb-5 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-100">
                  <option>استفسار عام</option>
                  <option>الاستشارات الطبية</option>
                  <option>التطعيمات والحقن</option>
                  <option>التحاليل والفحوصات</option>
                  <option>الفحوصات التشخيصية</option>
                  <option>المواعيد والخدمات المتاحة</option>
                </select>
                <ChevronDown className="pointer-events-none absolute left-4 top-3.5 text-slate-400" size={18} />
              </div>
              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-700 px-5 py-4 font-extrabold text-white shadow-lg shadow-brand-700/20 transition hover:bg-brand-800">
                تجهيز رسالة واتساب <ArrowLeft size={18} />
              </button>
              {notice && <p role="status" className="mt-4 rounded-xl bg-white p-3 text-sm leading-6 text-brand-800">{notice}</p>}
              <p className="mt-4 text-xs leading-6 text-slate-500">لا تكتب أي تفاصيل طبية حساسة في هذا النموذج. لا يتم حفظ البيانات أو إرسالها إلى قاعدة بيانات.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/buc-family-health-center-logo.jpg" alt="" className="h-12 w-24 rounded bg-white object-contain" />
            <div><p className="font-extrabold text-brand-950">عيادات مؤسسة جامعة بدر التخصصية</p><p className="mt-1 text-xs text-slate-500">مدينة بدر، القاهرة</p></div>
          </div>
          <p className="text-xs leading-6 text-slate-500">هذه الصفحة التعريفية لا تمثل نظام حجز طبي مؤكد. يرجى الاتصال بالمركز لتأكيد الخدمات والمواعيد.</p>
          <a href="https://www.facebook.com/share/1dS7ABkTEV/" target="_blank" rel="noreferrer" aria-label="صفحة فيسبوك" className="inline-flex items-center gap-2 font-bold text-brand-700 hover:text-brand-900"><Facebook size={18} /> فيسبوك</a>
        </div>
        <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} عيادات مؤسسة جامعة بدر التخصصية</div>
      </footer>
    </div>
  )
}

function ArrowDownIcon() {
  return <CalendarDays size={17} />
}

export default App
