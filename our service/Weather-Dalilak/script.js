let country = document.querySelector("#country"); // الحصول على عنصر الإدخال الخاص بالدولة
let city = document.querySelector("#city"); // الحصول على عنصر الإدخال الخاص بالمدينة
let check = document.querySelector("#check"); // الحصول على زر "التحقق"
let tempIcon = document.querySelector("#tempIcon"); // عنصر أيقونة الطقس
let weatherCountry = document.querySelector("#weatherCountry"); // عنصر لعرض اسم المدينة والدولة
let temperature = document.querySelector("#temperature"); // عنصر لعرض درجة الحرارة
let weatherDescription = document.querySelector("#weatherDescription"); // عنصر لعرض وصف الطقس
let feelsLike = document.querySelector("#feelsLike"); // عنصر لعرض "الإحساس كأن"
let humidity = document.querySelector("#humidity"); // عنصر لعرض نسبة الرطوبة
let longitude = document.querySelector("#longitude"); // عنصر لعرض خط الطول
let latitude = document.querySelector("#latitude"); // عنصر لعرض خط العرض

check.addEventListener("click", () => { // عند الضغط على زر "التحقق"
    let key = `bd4ea33ecf905116d12af172e008dbae`; // مفتاح API الخاص بـ OpenWeatherMap
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&lang=en&units=metric&appid=${key}`; 
    // إعداد رابط API باستخدام المدينة والدولة والقيم المطلوبة

    fetch(url).then(response => { // إرسال الطلب إلى API واستلام الاستجابة
        return response.json(); // تحويل الاستجابة إلى JSON
    }).then(data => { // عند الحصول على البيانات بنجاح
        console.log(data); // طباعة البيانات في وحدة التحكم (لأغراض التصحيح)
        weatherCountry.innerText = `${data.name} / ${data.sys.country}`; // عرض اسم المدينة والدولة
        temperature.innerHTML = `${data.main.temp}°<b>C</b>`; // عرض درجة الحرارة مع وحدة "C"

        document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + "')"; 
        // تغيير صورة الخلفية (المتغير غير مكتمل في السطر هذا، لكن لا تعديل كما طلبت)

        data.weather.forEach(items => { // تكرار عبر مصفوفة حالة الطقس
            weatherDescription.innerText = items.description; // عرض وصف الطقس
            if (items.id < 250) { // إذا كان الطقس عاصفة
                tempIcon.src = `tempicons/storm.svg`; // عرض أيقونة العاصفة
            } else if (items.id < 350) { // إذا كان الطقس رذاذ
                tempIcon.src = `tempicons/drizzle.svg`; // أيقونة الرذاذ
            } else if (items.id < 550) { // إذا كان الطقس ثلج
                tempIcon.src = `tempicons/snow.svg`; // أيقونة الثلج
            } else if (items.id < 650) { // إذا كان الطقس مطر
                tempIcon.src = `tempicons/rain.svg`; // أيقونة المطر
            } else if (items.id < 800) { // ظروف جوية أخرى (مثل ضباب)
                tempIcon.src = `tempicons/atmosphere.svg`; // أيقونة الغلاف الجوي
            } else if (items.id === 800) { // طقس صافي
                tempIcon.src = `tempicons/sun.svg`; // أيقونة الشمس
            } else if (items.id > 800) { // طقس غائم
                tempIcon.src = `tempicons/clouds.svg`; // أيقونة الغيوم
            }
        })

        feelsLike.innerText = `Feels Like ${data.main.feels_like}°C`; // عرض درجة الإحساس كأن

        humidity.innerText = `Humidity ${data.main.humidity}`; // عرض نسبة الرطوبة
        latitude.innerText = `Latitude ${data.coord.lat}`; // عرض خط العرض
        longitude.innerText = `Latitude ${data.coord.lon}`;

    })

    country.value = ""; // تفريغ حقل الدولة بعد التنفيذ
    city.value = ""; // تفريغ حقل المدينة بعد التنفيذ
})
