<template>
  <div class="min-h-screen flex flex-col">
    <div class="bg-primary-600 text-white py-6 px-4">
      <h1 class="text-2xl font-semibold">Create Account</h1>
      <p class="text-primary-100">Join Neoviso for beauty and wellness</p>
    </div>
    
    <div class="flex-1 p-6">
      <form @submit.prevent="handleRegister" class="space-y-5">
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label for="first-name" class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input 
              id="first-name"
              type="text" 
              v-model="firstName"
              class="input-field" 
              placeholder="John"
              required
            />
          </div>
          
          <div>
            <label for="last-name" class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input 
              id="last-name"
              type="text" 
              v-model="lastName"
              class="input-field" 
              placeholder="Doe"
              required
            />
          </div>
        </div>
        
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            id="email"
            type="email" 
            v-model="email"
            class="input-field" 
            placeholder="your.email@example.com"
            required
          />
        </div>
        
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input 
            id="phone"
            type="tel" 
            v-model="phone"
            class="input-field" 
            placeholder="(123) 456-7890"
            required
          />
        </div>
        
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            id="password"
            type="password" 
            v-model="password"
            class="input-field" 
            placeholder="••••••••"
            required
          />
          <p class="mt-1 text-xs text-gray-500">Password must be at least 8 characters</p>
        </div>
        
        <div>
          <label for="confirm-password" class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <input 
            id="confirm-password"
            type="password" 
            v-model="confirmPassword"
            class="input-field" 
            placeholder="••••••••"
            required
          />
        </div>
        
        <div class="flex items-start">
          <input 
            id="terms" 
            type="checkbox" 
            v-model="agreeToTerms"
            class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded mt-1"
            required
          />
          <label for="terms" class="ml-2 block text-sm text-gray-700">
            I agree to the <a href="#" class="text-primary-600 hover:underline">Terms of Service</a> and <a href="#" class="text-primary-600 hover:underline">Privacy Policy</a>
          </label>
        </div>
        
        <button type="submit" class="btn-primary w-full" :disabled="!isFormValid">Create Account</button>
      </form>
      
      <div class="mt-6 text-center">
        <p class="text-sm text-gray-600">
          Already have an account?
          <NuxtLink to="/auth/login" class="text-primary-600 font-medium">Sign in</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth'
});

const router = useRouter();

// Form data
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const phone = ref('');
const password = ref('');
const confirmPassword = ref('');
const agreeToTerms = ref(false);

// Computed property to check if form is valid
const isFormValid = computed(() => {
  return firstName.value.trim() !== '' &&
    lastName.value.trim() !== '' &&
    email.value.trim() !== '' &&
    phone.value.trim() !== '' &&
    password.value.length >= 8 &&
    password.value === confirmPassword.value &&
    agreeToTerms.value;
});

// Register handler
function handleRegister() {
  if (!isFormValid.value) return;
  
  // In a real app, this would make an API call to create the user
  console.log('Registering with:', { 
    firstName: firstName.value,
    lastName: lastName.value, 
    email: email.value, 
    phone: phone.value 
  });
  
  // For demo purposes, we'll simulate a successful registration
  setTimeout(() => {
    router.push('/');
  }, 1000);
}
</script>