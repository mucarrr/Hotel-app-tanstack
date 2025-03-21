import { useMutation, useQuery } from "@tanstack/react-query";
import api from "./api";
import { PlaceData, PlaceResponse, PlacesResponse } from "../types/Tpes";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const usePlaces = (params?:any) => {
  return useQuery({
    queryKey: ['places', params],//arama parametreleri değiştiğinde queryKey değişir ve yeni api isteği atılır
    queryFn: () => api.get<PlacesResponse>('/places', {params: params}).then((res) => res.data.places),
    retry: 3, //hata alındığında 3 kere tekrar deneme
    retryDelay: 1000, //1 saniye bekle istekler arasinda
    /* staleTime: 1000 * 60 * 5, //5 dk cache'de tutulacak. bu sure icinde tekrar tekrar farkli sayfalarda bile olsa api istegi atilmaz, cache'deki veriyi kullanir. */
   /*  gcTime: 1000 * 60 * 5, //5 dk sonra cache'i temizle, cachedeki kullanilmayan verileri temizle ki bellekte yer kaplamasin */
  })
}
// sayfa yuklendigi anda api istegi atmak icin useQuery
// herhangi bir kullanici islemindden sonra api istegi atmak icin useMutation

export const useCreatePlace = () => {
  const navigate = useNavigate();

  return useMutation({
    // mutation key
    mutationKey: ["create"],
    // api isteğini atan fonksiyon
    mutationFn: (body: PlaceData) => api.post("/places", body),
    // istek başarılı olduğunda
    onSuccess: () => {
      toast.success("Konaklama noktası oluşturuldu");
      navigate(`/`);
    },
    // istek başarısız olduğunda
    onError: () => {
      toast.error("Bir hata oluştus");  
    },
  });
};

export const usePlace = (id: string) => {
  return useQuery({
    queryKey: ["place"],
    queryFn: () => api.get<PlaceResponse>(`/place/${id}`).then((res) => res.data),
  });
};
export const useRemovePlace = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["remove"],

    mutationFn: (id: number) => api.delete(`/place/${id}`),

    onSuccess: () => {
      toast.success("Konaklama noktası kaldırıldı");
      navigate("/");
    },

    onError: () => {
      toast.error("Bir hata oluştu");
    },
  });
};

