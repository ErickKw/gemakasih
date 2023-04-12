<template>
 <section id="blog" class="  pt-10 pb-32 dark:bg-dark">
   <div class="container">
     <div class="w-full px-4">
       <div class="mx-auto mb-16 max-w-xl text-center">
         <h4 class="mb-2 text-lg font-semibold text-primary">Galery</h4>
         <h2
           class=" text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl"
         >
           Momentum
         </h2>
         <p class="text-md font-medium text-secondary md:text-lg">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
           quisquam perspiciatis blanditiis dolores?
         </p>
       </div>
     </div>

     <div class="flex flex-wrap">
       <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
         <div
           class="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800"
         >
           <img
             src="https://source.unsplash.com/360x200?programming"
             alt="Programming"
             class="w-full"
           />
           
         </div>
       </div>
       <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
         <div
           class="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800"
         >
           <img
             src="https://source.unsplash.com/360x200?mechanical+keyboard"
             alt="Mechanical Keyboard"
             class="w-full"
           />
           
         </div>
       </div>
       <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
         <div
           class="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800"
         >
           <img
             src="https://source.unsplash.com/360x200?coffee"
             alt="Coffee"
             class="w-full"
           />
           
         </div>
       </div>

       <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
         <div
           class="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800"
         >
           <img
             src="https://static.wixstatic.com/media/5c1790_52ad96d435c245f9ab21ee870783d61f~mv2.jpg/v1/fill/w_640,h_462,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5c1790_52ad96d435c245f9ab21ee870783d61f~mv2.jpg"
             alt="Coffee"
             class="w-full"
           />
           
         </div>
       </div>

       <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
         <div
           class="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800"
         >
           <img
             src="data:image/jpeg;base64,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"
             alt="Mechanical Keyboard"
             class="w-full"
           />
           
         </div>
       </div>

       <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
         <div
           class="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800"
         >
           <img
             src="https://www.inkemaris.com/img/img%20IMA/ourservices/ourservice09.png"
             alt="Programming"
             class="w-full"
           />
           
         </div>
       </div>
     </div>
   </div>
 </section>
</template>
