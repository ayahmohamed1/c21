// src/content.js
const content = {
  music: "/path-to-your-music.mp3", 
  
  menu: {
    title: "pick a gift",
    subtitle: "choose one to open ↓",
    items: [
      { id: "memories", icon: "📸", label: "Captured Memories" },
      { id: "video", icon: "🎬", label: "Our Video" },
      { id: "song", icon: "🎵", label: "our song" },
      { id: "letter", icon: "💌", label: "Love Letter" }
    ]
  },

  song: {
    audioSrc: "/music/music.mp3",
    remindsText: "this song always makes me think of you",
    songTitle: "our song",
    artist: "for you 🎵",
    highlight: "every lyric feels like us 💕",
    title: "our song",
    returnButton: "RETURN"
  },

  // استخدام علامات ` بدل "" يسمح لك بالنزول بالـ Enter مباشرة بدون \n
  letter: {
    title: "a letter",
    message: `هاي عامل ايه 🤨

بيقولوا يعني ان عيدميلادك النهارده 

مكنش ينفع يعدي عيدميلادك الا لما اعملك حاجه مميزه ويارب تكون الهديه والويب سايت دول عجبوك 💜.



كل سنه وانت طيب  يعم وعقبال مليون سنه وانت كل سنه بتكبر وتعمل عقلك بعقلي وانت الكبير كبر عقلك معايا شويه انا مش مرات ابوك😔.


كل سنه وانت انجح حد في الدنيا وانا دايما فخوره بيك🫂💜

كل سنه وانت تروح تعمل للبنات لاف يا بتاع اروي ومريم😔✋🏻

كل سنه وانت بالنسبالي لسه راجل صغنون مكملتش ٢٠ سنه حتي 🥹💜

مش هرغي كتير بقي كفايه 🤨✋🏻

باي 


I love you💜🫂
.`,
    signoff: " your love,",
    signature: "yours always ♡",
    returnButton: "RETURN"
  },

  memories: {
    title: "our memories",
    images: [
      { src: "/images/placeholder-3.jpg", label: "" },
      { src: "/images/placeholder-4.jpg",  label: "" },
      { src: "/images/placeholder-5.jpg", label: "" },
    ],
    returnButton: "RETURN"
  },

  video: {
    title: "for you",
    videoSrc: "/videos/video.mp4", 
    caption: "a little something I put together",
    returnButton: "RETURN"
  }
};

export default content;