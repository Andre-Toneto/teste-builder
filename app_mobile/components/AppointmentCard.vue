<template>
  <!-- <div class="appointment-card" :class="`border-l-${statusColor}-500`"> -->
  <div class="appointment-card" :class="statusClasses.border">
    <div class="flex justify-between">
      <div>
        <h3 class="font-medium">{{ appointment.subject }}</h3>
        <p class="text-sm text-gray-500">{{ appointment.location }}</p>
      </div>
      <div class="flex flex-col items-end w-20">
        <span class="text-sm text-end font-medium">{{ formattedDate }}</span>
        <span class="mt-1 text-xs text-gray-500">{{ formattedTime }}</span>
      </div>
    </div>
    <div class="mt-3 flex items-center justify-between">
      <span 
        class="text-xs px-2 py-1 rounded-full" 
         :class="[statusClasses.bg, statusClasses.text]"
      >
        {{ capitalizedStatus }}
      </span>
      <div class="flex space-x-2">
        <button 
          v-if="appointment.status === 'pending' || appointment.status === 'confirmed'"
          class="text-sm text-gray-600 px-2 py-1 rounded-md hover:bg-gray-100"
          @click="$emit('reschedule', appointment.id)"
        >
          Reschedule
        </button>
        <button 
          v-if="appointment.status === 'pending' || appointment.status === 'confirmed'"
          class="text-sm text-red-600 px-2 py-1 rounded-md hover:bg-gray-100"
          @click="$emit('cancel', appointment.id)"
        >
          Cancel
        </button>
        <button 
          class="text-sm text-blue-600 px-2 py-1 rounded-md hover:bg-gray-100"
          @click="$emit('edit', appointment.id)"
        >
          Editar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  appointment: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['reschedule', 'cancel', "edit"]);

// Format date
const formattedDate = computed(() => {
  const date = new Date(props.appointment.startTime);
  return date.toLocaleDateString('pt-BR', { month: 'short', day: 'numeric', year: 'numeric' });
});

// Format time
const formattedTime = computed(() => {
  const date = new Date(props.appointment.startTime);
  return date.toLocaleTimeString('pt-BR', { hour: 'numeric', minute: '2-digit', hour12: true });
});

// Determine status color
// const statusColor = computed(() => {
//   switch (props.appointment.status) {
//     case 'Realizado': return 'green';
//     case 'pending': return 'yellow';
//     case 'completed': return 'primary';
//     case 'cancelled': return 'red';
//     default: return 'gray';
//   }
// });
const statusClasses = computed(() => {
  switch (props.appointment.status) {
    case 'Realizado':
      return {
        bg: 'bg-green-100',
        text: 'text-green-700',
        border: 'border-l-green-500'
      };
    case 'Aberto':
      return {
        bg: 'bg-yellow-100',
        text: 'text-yellow-700',
        border: 'border-l-yellow-500'
      };
    case 'completed':
      return {
        bg: 'bg-primary-100',
        text: 'text-primary-700',
        border: 'border-l-primary-500'
      };
    case 'cancelled':
      return {
        bg: 'bg-red-100',
        text: 'text-red-700',
        border: 'border-l-red-500'
      };
    default:
      return {
        bg: 'bg-gray-100',
        text: 'text-gray-700',
        border: 'border-l-gray-500'
      };
  }
});

// Capitalize status
const capitalizedStatus = computed(() => {
  return props.appointment.status.charAt(0).toUpperCase() + props.appointment.status.slice(1);
});

const edit = (id) => {
  emit('edit', id)
}
</script>