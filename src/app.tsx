import { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Droplets, 
  Sparkles, 
  Leaf, 
  Zap, 
  Heart,
  Wind
} from 'lucide-react';

// ==========================================
// إعدادات منصة تاجر - TAAJER CONFIGURATION
// ==========================================
const TAAJER_CONFIG = {
  API_KEY: 'YOUR_API_KEY_HERE', // ضع مفتاح الـ API هنا
  PRODUCT_ID: 'YOUR_PRODUCT_ID_HERE', // ضع معرف المنتج هنا
};

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: ''
  });
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 700);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const cities = [
    "دبي", "أبوظبي", "الشارقة", "عجمان", "رأس الخيمة", "الفجيرة", "أم القيوين", "العين"
  ];

  const features = [
    {
      icon: <Wind className="w-8 h-8 text-zinc-900" />,
      title: "موسين الحلزون الطبيعي 92%",
      desc: "يساعد على إصلاح البشرة المتضررة، يخفف الخطوط الرفيعة، يوحّد لون البشرة، ويحفّز إنتاج الكولاجين لمرونة أعلى."
    },
    {
      icon: <Droplets className="w-8 h-8 text-zinc-900" />,
      title: "ترطيب عميق بدون دهن",
      desc: "قوامه خفيف وسهل الامتصاص، يعطي ترطيب يدوم طول اليوم بدون ثِقل أو لمعان."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-zinc-900" />,
      title: "يهدّي البشرة الحساسة",
      desc: "مثالي للبشرة اللي تتعرض لالتهاب، احمرار أو جفاف—يريّحها بسرعة ويتركها مريحة ولطيفة."
    },
    {
      icon: <Zap className="w-8 h-8 text-zinc-900" />,
      title: "تجديد خلايا البشرة",
      desc: "يحسّن ملمس البشرة، يقلل التصبغات والبقع مع الاستخدام المنتظم، ويعطي مظهر حيوي ومشرق."
    },
    {
      icon: <Wind className="w-8 h-8 text-zinc-900" />,
      title: "قوام حريري سريع الامتصاص",
      desc: "خفيف على البشرة ويترك إحساس ناعم ومنتعش."
    },
    {
      icon: <Heart className="w-8 h-8 text-zinc-900" />,
      title: "منتج صديق للحيوانات",
      desc: "موسين الحلزون يُجمع بدون ما يسبب أي أذى—منتج آمن وأخلاقي."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // هنا يتم وضع كود الربط مع API تاجر
    console.log("Submitting to Taajer...", {
      api_key: TAAJER_CONFIG.API_KEY,
      product_id: TAAJER_CONFIG.PRODUCT_ID,
      customer: formData
    });

    alert('تم استلام طلبك بنجاح! سنتواصل معك قريباً لتأكيد الشحن.');
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-['Cairo'] selection:bg-zinc-100" dir="rtl">
      
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-black tracking-tighter">
            COSRX <span className="text-[10px] font-light border border-black px-1 ml-1 align-top">PREMIUM</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold">
            <CheckCircle2 className="w-4 h-4 text-zinc-900" />
            ضمان الأصالة 100%
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 hero-gradient overflow-hidden">
        <div className="container mx-auto text-center relative">
          {/* Decorative subtle gold glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-amber-100/20 blur-[120px] rounded-full -z-10"></div>
          
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              بداية الإشراقة الطبيعية <br />
              <span className="text-zinc-500 font-medium">والترميم الفوري للبشرة</span>
            </h1>

            <div className="relative my-12 group">
              <img 
                src="/cosrx-snail-92.jpg" 
                alt="COSRX Advanced Snail 92" 
                className="w-full max-w-md mx-auto drop-shadow-2xl transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <p className="text-zinc-600 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              تركيبة متقدمة بتركيز 92% من موسين الحلزون النقي لترطيب وتجديد خلايا البشرة بعمق من أول استخدام.
            </p>

            <button 
              onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-black text-white px-12 py-5 rounded-full text-xl font-black hover:bg-zinc-800 transition-all shadow-xl active:scale-95"
            >
              اطلبي الآن - الدفع عند الاستلام
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4">لماذا تختارين COSRX؟</h2>
            <div className="w-20 h-1 bg-black mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-soft border border-zinc-100 hover:border-zinc-300 transition-all group">
                <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-24 bg-white border-y border-zinc-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4">طريقة الاستخدام</h2>
            <p className="text-zinc-500">للحصول على أفضل النتائج، اتبعي الخطوات البسيطة التالية:</p>
          </div>

          <div className="space-y-4">
            {[
              "استخدميه بعد التونر أو السيروم على بشرة نظيفة.",
              "خذي كمية مناسبة ووزعيها على الوجه والرقبة.",
              "ربّتي بلطف لين تمتصه البشرة بالكامل."
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-6 p-6 bg-[#fafafa] rounded-xl border border-zinc-100">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-black flex-shrink-0">
                  {idx + 1}
                </div>
                <p className="font-bold text-zinc-700">{step}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-zinc-400 text-sm font-bold">
            <CheckCircle2 className="w-4 h-4" />
            مناسب للاستخدام صباح ومساء.
          </div>
        </div>
      </section>

      {/* Checkout Section */}
      <section id="order-form" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
            كريم واحد… يعالج، يرطّب، يجدّد، ويخلي بشرتج نضرة كل يوم!
          </h2>
          
          <div className="mb-10 p-8 rounded-3xl bg-zinc-50 border-2 border-dashed border-zinc-200">
            <div className="text-zinc-500 text-sm mb-2 font-bold uppercase tracking-wider">السعر الحالي</div>
            <div className="text-5xl font-black text-zinc-900 mb-4">49 <span className="text-xl font-medium">درهم إماراتي</span></div>
            <div className="flex items-center justify-center gap-2 text-green-600 font-bold text-sm">
              <Truck className="w-4 h-4" />
              الشحن مجاني بالكامل والدفع عند الاستلام
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-right">
            <div>
              <label className="block text-sm font-bold mb-2 mr-2">الاسم الكامل</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full bg-white border border-zinc-200 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-zinc-900 transition-all shadow-sm"
                placeholder="أدخل اسمك الكامل"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 mr-2">رقم الهاتف</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full bg-white border border-zinc-200 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-zinc-900 transition-all shadow-sm font-sans"
                placeholder="05xxxxxxxx"
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-bold mb-2 mr-2">المدينة / الإمارة</label>
              <select 
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full bg-white border border-zinc-200 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-zinc-900 transition-all shadow-sm appearance-none cursor-pointer"
              >
                <option value="">اختر المدينة</option>
                {cities.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <ChevronDown className="absolute left-6 bottom-5 text-zinc-400 pointer-events-none" />
            </div>

            <button 
              type="submit"
              className="w-full bg-black text-white py-6 rounded-2xl text-2xl font-black shadow-2xl hover:bg-zinc-800 transition-all transform active:scale-[0.98] mt-6"
            >
              تأكيد الطلب الآن
            </button>
          </form>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-zinc-100 pt-8">
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-zinc-400" />
              <span className="text-[10px] font-bold text-zinc-500">شحن مجاني وسريع</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-zinc-400" />
              <span className="text-[10px] font-bold text-zinc-500">منتج أصلي 100%</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-zinc-400" />
              <span className="text-[10px] font-bold text-zinc-500">الدفع عند الاستلام</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#fafafa] text-center border-t border-zinc-100">
        <p className="text-zinc-400 text-xs font-bold tracking-widest">© 2024 COSRX PREMIUM - جميع الحقوق محفوظة</p>
      </footer>

      {/* Sticky Bottom Button for Mobile */}
      {showSticky && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-zinc-100 z-50 md:hidden">
          <button 
            onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full bg-black text-white py-4 rounded-xl font-black text-lg shadow-xl"
          >
            اطلبي الآن بـ 49 درهم
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
