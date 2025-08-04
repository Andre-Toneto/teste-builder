<template>
  <div class="page-container">
    <h1 class="page-title">My Points</h1>
    
    <!-- Points summary card -->
    <div class="card mb-8">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-medium">Total Points</h2>
        <button class="text-sm text-primary-600">History</button>
      </div>
      
      <div class="flex items-center">
        <div class="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <div class="text-3xl font-bold text-primary-700">{{ pointsBalance }}</div>
          <div class="text-sm text-gray-500">Available points</div>
        </div>
      </div>
      
      <div class="mt-6 pt-4 border-t border-gray-100">
        <div class="text-sm flex items-center justify-between mb-2">
          <span class="text-gray-600">Points to next tier:</span>
          <span class="font-medium">{{ nextTierPoints }} points</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-primary-500 h-2 rounded-full" :style="`width: ${tierProgress}%`"></div>
        </div>
        <div class="text-xs text-gray-500 mt-1">{{ tierProgress }}% to {{ nextTier }}</div>
      </div>
    </div>
    
    <!-- Refer & Earn -->
    <section class="mb-8">
      <div class="card bg-gradient-to-r from-secondary-500 to-primary-500 text-white p-5">
        <h2 class="text-lg font-medium mb-3">Refer & Earn</h2>
        <p class="text-sm mb-4 opacity-90">Share with friends and earn 500 points when they book their first appointment!</p>
        
        <button 
          class="bg-white text-primary-600 font-medium py-2.5 px-4 rounded-lg w-full flex items-center justify-center"
          @click="shareReferralLink"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share Your Link
        </button>
      </div>
    </section>
    
    <!-- How to earn more points -->
    <section class="mb-8">
      <h2 class="text-lg font-medium mb-4">Ways to Earn Points</h2>
      
      <div class="space-y-3">
        <div v-for="(way, index) in waysToEarn" :key="index" class="card flex items-center">
          <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3 flex-shrink-0">
            <component :is="way.icon" class="h-5 w-5 text-primary-600" />
          </div>
          <div>
            <h3 class="font-medium mb-1">{{ way.title }}</h3>
            <p class="text-sm text-gray-500">{{ way.description }}</p>
          </div>
          <div class="ml-auto pl-3 flex-shrink-0">
            <span class="text-primary-600 font-semibold text-sm">+{{ way.points }}</span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Redeem points section -->
    <section>
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-medium">Redeem Points</h2>
        <button class="text-sm text-primary-600">See All</button>
      </div>
      
      <div class="grid grid-cols-2 gap-3">
        <div v-for="reward in rewards" :key="reward.id" class="card p-3 flex flex-col">
          <div class="h-24 mb-2 bg-gray-100 rounded-lg overflow-hidden">
            <img :src="reward.image" :alt="reward.name" class="h-full w-full object-cover" />
          </div>
          <h3 class="text-sm font-medium mb-1">{{ reward.name }}</h3>
          <p class="text-xs text-gray-500 mb-2">{{ reward.description }}</p>
          <div class="mt-auto pt-2 flex justify-between items-center">
            <span class="text-sm text-primary-600 font-semibold">{{ reward.points }} pts</span>
            <button 
              class="text-xs bg-primary-100 text-primary-600 py-1 px-2 rounded"
              @click="redeemReward(reward)"
            >
              Redeem
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Mock data for points
const pointsBalance = ref(1250);
const nextTierPoints = ref(750);
const nextTier = ref('Gold Member');
const tierProgress = computed(() => {
  return Math.round((pointsBalance.value / (pointsBalance.value + nextTierPoints.value)) * 100);
});

// Ways to earn points
const waysToEarn = [
  {
    title: 'Book an Appointment',
    description: 'Earn points for each booking',
    points: '100-300',
    icon: defineComponent({
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      `
    })
  },
  {
    title: 'Refer a Friend',
    description: 'When they book their first appointment',
    points: '500',
    icon: defineComponent({
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      `
    })
  },
  {
    title: 'Write a Review',
    description: 'Share your experience',
    points: '200',
    icon: defineComponent({
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      `
    })
  }
];

// Rewards
const rewards = ref([
  {
    id: 1,
    name: 'Free Facial Treatment',
    description: 'One standard facial treatment',
    points: 2000,
    image: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    name: '20% Off Next Visit',
    description: 'Discount on any service',
    points: 1000,
    image: 'https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    name: 'Free Product Sample',
    description: 'Choose from selected items',
    points: 500,
    image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 4,
    name: 'VIP Treatment Upgrade',
    description: 'Upgrade any service to VIP',
    points: 1500,
    image: 'https://images.pexels.com/photos/6663359/pexels-photo-6663359.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
]);

// Function to share referral link
function shareReferralLink() {
  // In a real app, this would use the Web Share API or a custom modal
  const referralLink = 'https://neoviso.com/refer/sarah123';
  
  // Check if Web Share API is available
  if (navigator.share) {
    navigator.share({
      title: 'Join me at Neoviso Aesthetic Clinic',
      text: 'Get 500 points when you book your first appointment!',
      url: referralLink
    });
  } else {
    // Fallback to copying to clipboard
    navigator.clipboard.writeText(referralLink)
      .then(() => {
        alert('Referral link copied to clipboard: ' + referralLink);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        alert('Your referral link: ' + referralLink);
      });
  }
}

// Function to redeem a reward
function redeemReward(reward) {
  if (pointsBalance.value >= reward.points) {
    // In a real app, this would make an API call to redeem the reward
    alert(`You've redeemed: ${reward.name}`);
    pointsBalance.value -= reward.points;
  } else {
    alert(`You need ${reward.points - pointsBalance.value} more points to redeem this reward.`);
  }
}
</script>