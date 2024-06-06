<template>
    <div class="absolute z-10 inset-0  backdrop-blur-md flex justify-center items-center">
        <div class="spinner"></div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.spinner {
   width: 56px;
   height: 56px;
   display: grid;
   animation: spinner-plncf9 4s infinite;
}

.spinner::before,
.spinner::after {
   content: "";
   grid-area: 1/1;
   border: 9px solid;
   border-radius: 50%;
   border-color: #00b0ff #00b0ff #0000 #0000;
   mix-blend-mode: darken;
   animation: spinner-plncf9 1s infinite linear;
}

.spinner::after {
   border-color: #0000 #0000 #dbdcef #dbdcef;
   animation-direction: reverse;
}

@keyframes spinner-plncf9 {
   100% {
      transform: rotate(1turn);
   }
}

</style>