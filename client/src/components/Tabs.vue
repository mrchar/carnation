<template>
  <!-- name of each tab group should be unique -->
  <div class="tabs tabs-border">
    <input type="radio" name="my_tabs_2" class="tab" aria-label="Tab 1" />
    <div class="tab-content border-base-300 bg-base-100 p-10">Tab content 1</div>

    <input type="radio" name="my_tabs_2" class="tab" aria-label="Tab 2" checked="checked" />
    <div class="tab-content border-base-300 bg-base-100 p-10">Tab content 2</div>

    <input type="radio" name="my_tabs_2" class="tab" aria-label="Tab 3" />
    <div class="tab-content border-base-300 bg-base-100 p-10">Tab content 3</div>
  </div>
</template>