// Mood Selector Responses
const moodResponses = {
  pain: "I know cramps are awful, Nandini. 🥺 Get your heating pad, lay down under a warm blanket, and try the breathing helper on the right. You don't have to be active today—cozy rest is your only job right now! 🍫",
  sad: "Sending you the biggest virtual hug in the world, Nandini! 🤍 It is completely okay to feel low sometimes. I'm right here with you in spirit, holding your hand and reminding you how incredibly appreciated and special you are as my best friend.",
  exhausted: "You've been pushing yourself too hard, beautiful. 🛌 Lie down, close your eyes, and take a guilt-free nap. The world can wait, but your rest cannot. Sleep well, Nandini! ✨",
  tired: "Take a deep breath and relax, Nandini. 🌸 Put on your coziest clothes, grab a warm drink, and watch your favorite series. Let yourself unwind completely today.",
  okay: "I'm so glad you're feeling okay, Nandini! 🌸 Keep smiling and have a wonderful, gentle day. Remember, I'm always cheering you on and thinking about you!"
};

// Letter Contents
const letterContents = {
  pain: `Hey Nandini,

I hate seeing you in pain, and I wish I could be there to help you out and keep you company right now. 🥺

Since I can't be there physically, here is my prescription for you:
1. Find your warmest, softest blanket.
2. Fill up a heating pad or hot water bottle and place it on your tummy.
3. Make a warm cup of herbal tea or cocoa.
4. Eat a piece of chocolate (calories don't count today, I promise!).

You are so strong, bestie. Close your eyes, run the breathing helper on this page, and let your body rest. You've got this! ❤️`,

  sad: `Hey Nandini,

I'm so sorry you're feeling down today. 😢 I wish I could wipe away whatever is bothering you and replace it with a smile.

Whenever you feel sad, please remember:
- You are one of the brightest parts of my life.
- Your smile is my absolute favorite thing in the world.
- You are incredibly kind, intelligent, and beautiful inside and out.
- You have overcome every hard day before this, and you will get through this one too.

Take a deep breath. It's okay to feel sad, but don't stay down for too long. I am always just a message or call away, and I am sending you a massive, tight virtual hug. 🤍`,

  miss: `Hey Nandini,

If you're reading this, you must be missing your bestie! Just know that I miss hanging out with you too! 🙋‍♂️

It's hard when we can't hang out, but we'll make up for it next time. Close your eyes for a second, take a deep breath, and think of all the fun times we've had!

I can't wait until the next time we hang out. Until then, hold on to this note, and remember how much your best friend appreciates you! ✨`,

  smile: `Hey Nandini! 😊

Here is a little reminder to make you smile:

1. You look absolutely gorgeous when you smile, so keep doing it!
2. I am incredibly lucky to have you in my life.
3. Here is a silly joke for you:
   *Why did the teddy bear say no to dessert?*
   *Because he was already stuffed!* 🐻
   
4. And another one:
   *What do you call a sleeping dinosaur?*
   *A dino-snore!* 🦕

I hope this brought a little smile to your beautiful face. Have a wonderful day, bestie! 🌟`
};

// Need More Comfort Overlay Messages
const loveMessages = [
  "Nandini, you are the absolute best friend anyone could ask for. I'm so lucky to have you in my life! 🌸✨",
  "Just a reminder: you deserve all the happiness, comfort, and rest in the entire universe! 💖✨",
  "You're my absolute favorite bestie forever! 🥰🌸",
  "You are the best friend ever, Nandini. Sending you the biggest virtual hugs! 🤗❤️"
];

// --- WIDGET LOGIC ---

// 1. Mood Selector
const moodBtns = document.querySelectorAll(".mood-btn");
const moodResponse = document.getElementById("moodResponse");

moodBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    moodBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const mood = btn.getAttribute("data-mood");
    moodResponse.innerHTML = moodResponses[mood];
    
    // Trigger small heart burst
    spawnHearts(10);
  });
});

// 2. Water Tracker
let waterCount = 0;
const waterBtn = document.getElementById("waterBtn");
const waterCountEl = document.getElementById("waterCount");
const waterFill = document.getElementById("waterFill");

waterBtn.addEventListener("click", () => {
  waterCount++;
  waterCountEl.textContent = waterCount;
  
  // Calculate percentage (goal = 8 cups)
  const percentage = Math.min((waterCount / 8) * 100, 100);
  waterFill.style.height = `${percentage}%`;
  
  if (waterCount === 8) {
    setTimeout(() => {
      alert("Yay, Nandini! You reached your hydration goal today! Proud of you. 💧✨");
    }, 600);
  }
});

// 3. Breathing Helper
let breathingInterval = null;
let breathingState = 0; // 0: inhale, 1: exhale
const breatheBtn = document.getElementById("breatheBtn");
const breatheCard = document.getElementById("breatheCard");
const breatheText = document.getElementById("breatheText");
const breatheInstructions = document.getElementById("breatheInstructions");

breatheBtn.addEventListener("click", () => {
  if (breathingInterval) {
    // Stop breathing exercise
    clearInterval(breathingInterval);
    breathingInterval = null;
    breatheCard.classList.remove("breathe-active");
    breatheText.textContent = "Ready";
    breatheInstructions.textContent = "Click below to start deep breathing";
    breatheBtn.textContent = "Start Breathing";
  } else {
    // Start breathing exercise
    breatheCard.classList.add("breathe-active");
    breatheText.textContent = "Breathe In";
    breatheInstructions.textContent = "Breathe in deeply...";
    breatheBtn.textContent = "Stop Breathing";
    breathingState = 0;
    
    breathingInterval = setInterval(() => {
      if (breathingState === 0) {
        breatheText.textContent = "Breathe Out";
        breatheInstructions.textContent = "Slowly breathe out...";
        breathingState = 1;
      } else {
        breatheText.textContent = "Breathe In";
        breatheInstructions.textContent = "Breathe in deeply...";
        breathingState = 0;
      }
    }, 4000); // Toggles every 4 seconds to match the 8s animation cycle
  }
});

// 4. Open When Letters & Modals
const envelopeCards = document.querySelectorAll(".envelope-card");
const letterModal = document.getElementById("letterModal");
const letterText = document.getElementById("letterText");
const modalClose = document.getElementById("modalClose");

envelopeCards.forEach(card => {
  card.addEventListener("click", () => {
    const letterKey = card.getAttribute("data-letter");
    letterText.textContent = letterContents[letterKey];
    letterModal.classList.add("open");
  });
});

modalClose.addEventListener("click", () => {
  letterModal.classList.remove("open");
});

letterModal.addEventListener("click", (e) => {
  if (e.target === letterModal) {
    letterModal.classList.remove("open");
  }
});

// 5. Need More Love Button & Overlay
const loveBtn = document.getElementById("loveBtn");
const loveOverlay = document.getElementById("loveOverlay");
const loveOverlayMsg = document.getElementById("loveOverlayMsg");
const loveOverlayClose = document.getElementById("loveOverlayClose");
const heartsContainer = document.getElementById("heartsContainer");

loveBtn.addEventListener("click", () => {
  // Select random message
  const randomMsg = loveMessages[Math.floor(Math.random() * loveMessages.length)];
  loveOverlayMsg.textContent = randomMsg;
  
  // Show overlay
  loveOverlay.classList.add("open");
  
  // Trigger major heart explosion
  spawnHearts(55);
});

loveOverlayClose.addEventListener("click", () => {
  loveOverlay.classList.remove("open");
});

loveOverlay.addEventListener("click", (e) => {
  if (e.target === loveOverlay) {
    loveOverlay.classList.remove("open");
  }
});

// Helper: Heart/Flower Particle Spawn
function spawnHearts(count) {
  const elements = ["❤️", "💖", "🌸", "🌷", "✨", "🤍", "🌼"];
  
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.textContent = elements[Math.floor(Math.random() * elements.length)];
    
    // Randomize initial placement and properties
    const startX = Math.random() * 100; // % width
    const driftX = (Math.random() * 100 - 50) + "px"; // movement range
    const rotation = (Math.random() * 360) + "deg";
    const duration = (2.5 + Math.random() * 2) + "s";
    const scale = 0.5 + Math.random() * 0.8;
    
    heart.style.left = `${startX}vw`;
    heart.style.setProperty("--drift", driftX);
    heart.style.setProperty("--rotation", rotation);
    heart.style.setProperty("--scale", scale);
    heart.style.animationDuration = duration;
    
    // Set custom bottom offset to pop out nicely
    heart.style.bottom = "-5vh";
    
    heartsContainer.appendChild(heart);
    
    // Remove element after animation completes
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}

// Background idle heart floating (soft ambient)
setInterval(() => {
  spawnHearts(1);
}, 3000);