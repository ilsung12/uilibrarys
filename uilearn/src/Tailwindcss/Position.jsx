import React from "react";

export default function Position() {
  return (
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      <div class="relative p-2 h-32 w-32 bg-pink-300 bg-stripes bg-stripes-white rounded-md ">
        <div class="absolute inset-x-0 top-0 h-16 bg-pink-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">
          1
        </div>
      </div>

      <div class="relative p-2 h-32 w-32 bg-pink-300 bg-stripes bg-stripes-white rounded-md ">
        <div class="absolute inset-y-0 right-0 w-16 bg-pink-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">
          2
        </div>
      </div>

      <div class="relative p-2 h-32 w-32 bg-pink-300 bg-stripes bg-stripes-white rounded-md ">
        <div class="absolute inset-x-0 bottom-0 h-16 bg-pink-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md ">
          3
        </div>
      </div>

      <div class="relative p-2 h-32 w-32 bg-pink-300 bg-stripes bg-stripes-white rounded-md ">
        <div class="absolute inset-y-0 left-0 w-16 bg-pink-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">
          4
        </div>
      </div>

      <div class="relative p-2 h-32 w-32 bg-pink-300 bg-stripes bg-stripes-white rounded-md ">
        <div class="absolute inset-0 bg-pink-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">
          5
        </div>
      </div>

      <div class="relative p-2 h-32 w-32 bg-pink-300 bg-stripes bg-stripes-white rounded-md ">
        <div class="absolute left-0 top-0 h-16 w-16 bg-pink-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">
          6
        </div>
      </div>

      <div class="relative p-2 h-32 w-32 bg-pink-300 bg-stripes bg-stripes-white rounded-md ">
        <div class="absolute top-0 right-0 h-16 w-16 bg-pink-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">
          7
        </div>
      </div>

      <div class="relative p-2 h-32 w-32 bg-pink-300 bg-stripes bg-stripes-white rounded-md ">
        <div class="absolute right-0 bottom-0 h-16 w-16 bg-pink-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md ">
          8
        </div>
      </div>

      <div class="relative p-2 h-32 w-32 bg-pink-300 bg-stripes bg-stripes-white rounded-md ">
        <div class="absolute bottom-0 left-0 h-16 w-16 bg-pink-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">
          9
        </div>
      </div>
    </div>
  );
}
