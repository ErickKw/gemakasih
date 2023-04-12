<template>
  <section id="contact" class=" pb-36">

    <div class="container">

      <div class="w-full px-4">
        <div class="max-w-xl mx-auto text-center mb-16">
          <h4 class="font-semibold text-lg text-primary mb-2">Contact</h4>
          <h3 class="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
            Contact Us
          </h3>
          <p class="font-medium text-md text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            repellat!
          </p>
        </div>
      </div>

      <form action="">
       <div class="w-full lg:3/5 lg:mx-auto">
         <div class="w-full px-4 mb-9">
           <label for="name" class="text-base font-bold text-primary">Name</label>
           <input type="text" id="name" name="name" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary">
         </div>
          <div class="w-full px-4 mb-9">
           <label for="email" class="text-base font-bold text-primary">Email</label>
           <input type="email"  id="email" name="email" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary">
         </div>
          <div class="w-full px-4 mb-9">
           <label for="message" class="text-base font-bold text-primary">Message</label>
           <textarea class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" name="message" id="message" cols="30" rows="10"></textarea>
         </div>
         <div class="w-full px-4">
          <Button class="w-full lg:w-40">
            Send
          </Button>
         </div>
       </div>
      </form>

    </div>
  </section>
</template>
