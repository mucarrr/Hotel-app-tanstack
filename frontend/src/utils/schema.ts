import * as Yup from "yup";

const nameRegex = /^[A-Za-zÇĞİÖŞÜçğıöşü ]+$/;

export const createSchema = Yup.object().shape({
  name: Yup.string().required("Başlık zorunludur")
  .matches(nameRegex, "Başlık yalnızca harf karakteri içerebilir"),
  location: Yup.string()
    .required("Lokasyon zorunludur")
    .min(3, "Lokasyon en az 3 karakter olmalıdır")
    ,
  address: Yup.string()
    .required("Adres zorunludur")
    .min(3, "Adres en az 3 karakter olmalıdır"),
  description: Yup.string()
    .required("Açıklama zorunludur")
    .min(3, "Açıklama en az 3 karakter olmalıdır"),
  amenities: Yup.string().required("Hizmetler zorunludur"),
  rating: Yup.number()
    .required("Puan zorunludur")
    .min(1, "Puan en az 1 olmalıdır")
    .max(5, "Puan en fazla 5 olmalıdır"),
  price_per_night: Yup.number()
    .required("Fiyat zorunludur")
    .min(20, "Fiyat en az 20 olmalıdır"),
  availibility: Yup.boolean().default(false),
});
