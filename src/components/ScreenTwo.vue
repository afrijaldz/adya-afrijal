<script setup lang="ts"></script>

<template>
  <div class="bg-[#fff] min-h-screen snap-start text-white">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#2a231e"
        fill-opacity="1"
        d="M0,320L80,288C160,256,320,192,480,186.7C640,181,800,235,960,245.3C1120,256,1280,224,1360,208L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      ></path>
    </svg>
    <div
      class="px-5 mt-24 text-[#a98b71] font-content text-center"
      v-motion
      :initial="{
        y: 20,
        opacity: 0
      }"
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      :visible-once="{
        y: 0,
        opacity: 1
      }"
      :delay="300"
    >
      <div class="font-bold text-2xl font-content">
        "Tiada ibadah yang elok selain pernikahan, yang dapat menyatukan dua insan dalam
        cinta-Nya.""
      </div>
      <div class="mt-10">QS. Ar-Rum Ayat 21</div>
      <div class="mt-8">
        وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا
        وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ
        يَّتَفَكَّرُوْنَ
      </div>
      <div class="mt-8">
        Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu
        dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan
        di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat
        tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
      </div>
      <div class="mt-16">— بِـسْــــــــــمِ الله الرَّحْمٰنِ الرَّحِتْمِ</div>
      <div class="mt-8">
        Assalamu'alaikum warahmatullahi wabarakatuh Dengan memohon rahmat dan ridho Allah SWT, kami
        mohon do'a restu Bapak/Ibu/Saudara/i dalam rangka melangsungkan acara pernikahan kami
      </div>
    </div>
  </div>
</template>
