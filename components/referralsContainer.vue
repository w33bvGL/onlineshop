<template>
  <div class="bg-white w-full rounded-2xl p-6">
    <div class="flex justify-between items-center text-custom-green-1100">
      <h1 class="font-semibold opacity-85 text-3xl">Мои рефералы</h1><span data-v-5bb0bdcf="">2 человека</span>
    </div>
    <div data-v-5bb0bdcf="" class="sort mt-4">
      <div data-v-5bb0bdcf="">
        <ul
          class="opacity-65 font-medium text-lg flex gap-4 flex-nowrap flex-row overflow-x-auto text-nowrap mt-2 skip-scrollbar cursor-pointer">
          <li data-v-5bb0bdcf="">1 уровень
            <div class="w-full h-1.5 mt-1 bg-custom-green-1200 active"></div>
          </li>
          <li data-v-5bb0bdcf="">2 уровень</li>
          <li data-v-5bb0bdcf="">3 уровень</li>
        </ul>
      </div>
    </div>
    <div>
      <div v-for="n in 2" class="cursor-pointer" @click="openModal()">
        <hr class="border-1">
        <div class="pt-4 pb-4">
          <div class="flex items-center justify-between w-full">
            <div class="flex gap-3 items-center">
              <div class="cabinet-item-image-container bg-gray-100 rounded-3xl relative overflow-hidden">
                <img src="" alt="">
                <span class="text-sm bg-red-500 pr-2 pt-0.5 pb-0.5 pl-2 text-white absolute right-0 top-0 md:hidden">2
                  lvl</span>
              </div>
              <div>
                <div class="flex gap-2 items-center">
                  <h5 class="font-semibold text-2xl">Имя Фамилия</h5>
                  <span class="text-sm bg-red-500 pr-2 pt-0.5 pb-0.5 pl-2 text-white rounded-lg hidden md:block">2
                    lvl</span>
                </div>
                <div class="flex gap-3 mt-2 flex-col justify-start items-start md:flex-row">
                  <div class="border-2 rounded-xl pr-4 pl-4 text-red-500 border-red-500">Консультант</div>
                  <div class="border-2 rounded-lg pr-4 pl-4 text-gray-500 bg-gray-100">35 000 Рублей</div>
                </div>
              </div>
            </div>
            <div class="flex gap-1 opacity-45 font-medium text-lg">
              <p class="hidden md:block">Заработано</p>
              <p>500р</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white w-full rounded-2xl p-6">
    <div class="flex justify-between items-start md:items-center flex-col md:flex-row">
      <h1 class="font-semibold opacity-85 text-3xl text-custom-green-1100 text-nowrap mb-5 md:mb-0">
        Реферальная ссылка</h1>
      <button
        class="flex justify-center gap-3 text-xl w-full md:w-auto bg-white pt-2.5 pb-2.5 pr-4 pl-4 rounded-3xl text-custom-red line-clamp-1 leading-none border-2 border-custom-red">
        <p class="text">https://ref.dawd[paццвфвфцвфцв</p>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
          <mask id="mask0_517_7" style="mask-type:alpha;" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
            <rect width="18" height="18" fill="url(#pattern0_517_7)"></rect>
          </mask>
          <g mask="url(#mask0_517_7)">
            <rect x="-3" y="-7" width="40" height="35" fill="#A7D476"></rect>
          </g>
          <defs>
            <pattern id="pattern0_517_7" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_517_7" transform="scale(0.00195312)"></use>
            </pattern>
            <image id="image0_517_7" width="512" height="512"
              xlink:href="data:image/png;base64,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De+trhm8gSPayqH5jaMHAJyg0de866v3Dd7AEW0lAL5p9ACAEzQ6AEoArN4WAuC86gGjRwCcoAdV5wze8OeDfz5HtIUAuKiVvxAD4JBOqy4cvEEArNxWAgBgNqOvfR8a/PM5IgEAsE6jr30fHfzzOSIBALBOo699Vwz++RzRFgLg3qMHAAxwn8E/XwCs3BYCYPQrYQFGOHvwz//U4J/PEW0hAM4aPQBggNEBcN3gn88RbSEARv9HADDC6GvftYN/Pke0hQBwBwCYkQDgSLbwATo3jh4AMMjoa/js19/R//yPZAt3AACAQxIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAAHB4144ecFQCAAAO76rRA45KAADA4QkAAJiQAACACX1i9ICjEgAAcHgfGD3gqAQAABzepaMHHJUAAIDDe8/oAUclAADg8FYfAKeNHrADN44eADDI6Gv4rNff66uzq2tGDzkKdwAA4HD+Tys//EsAAMBh/d7oAbsgAADgcC4ZPWAXRj9/tAuzPgcFMPoaPuP195rq/OrTo4cclTsAAHDqLmkDh38JAAA4jBeMHrAro28f7cKMt6AAavw1fLbr71XVvaqrRw/ZBXcAAODUvLSNHP4lAADgVD1/9IBdGn37aBdmuwUF8Dmjr+EzXX/fUj1i9IhdcgcAAG7bj44esGuj63EXZipQgJsafQ2f5fr79uohbezX6w4AANy6H21jh3+Nr8dd2NxvCsApGn0Nn+H6+/rqUW3w1zr6X55d2NxvCsApGn0N3/r19/rqq6t3jh5yHDwFAAC37Kfa6OFf4+txF7ZeoABfyOhr+Javv5dXD6g+OXrIcXEHAAD+uhuq723Dh38JAAC4uX/T8q1/mzb69tEubPkWFMCtGX0N3+L195LqW1ruAmza6H95dmGL/wICnIrR1/CtXX/fVz2s+sjgHSfCUwAAUFdU394kh38JAAC4unpC9Z7RQ06SAABgZp+pnlS9efSQkyYAAJjVp6qLq98ZPWSEO44eAAADfKx6fPWm0UNGEQAAzOZ91bdVlw7eMZSnAACYySXVI5r88C8BAMAcbqh+pHps9aHBW/aCpwAA2LrLq6dUrx89ZJ+4AwDAVl1fPbd6YA7/z+MOAABb9Lrq2dUfjR6yr9wBAGBL3tbywT6PzuF/q9wBAGAL/rD699Wvtb0vKToWAgCAtfp4y4H/y9Ubxk5ZHwEAwJpc0/Je/hdUv1l9euyc9RIAAOyzG6q3V68+eLyhJQI4IgEAwCjXVp+orqquPPj7D1bvbvmkvkuryw7+f+yYAADg9jpt9ABuP28DBIAJCQAAmJAAAIAJCQAAmJAAAIAJCQAAmJAAAIAJCQAAmJAAAIAJCQAAmJAAAIAJCQAAmJAAAIAJCQAAmJAAAIAJbSEArhs9AGCAa0cPYN22EACfHD0AYIBPjB7Aum0hAPxHAMzItY8j2UIAuAMAzEgAcCRbCICrRg8AGMAffjiSLQTA/x09AGCAy0cPYN22EACXjh4AMIBrH0eyhQC4bPQAgAFc+ziSLQSACgZm5NrHkZw2esAOnFv9Vdv4tQCcihur8/IiaI5gC3cAPl798egRACfonTn8OaItBEDVa0YPADhBl4wewPoJAID1cc3jyLbyvPl51RXV6aOHAByzG6p7VFeOHsK6beUOwJXV/x49AuAEvDmHPzuwlQCoetHoAQAn4IWjB7ANW3kKoOr86i+qO40eAnBMrqvuXX109BDWb0t3AD5W/fboEQDH6OU5/NmRLQVA1a+MHgBwjF4wegDbsaWnAGp5F8CfVBeOHgKwY39a3a/lXQBwZFu7A3BD9R9HjwA4Bj+Ww58d2todgKozqvdWf3v0EIAdubz6spYXAcJObO0OQNVnqp8cPQJgh34ihz87tsU7AFVnVu9oeb4MYM0uqx5UXTt6CNuyxTsAtZTyc0aPANiB78/hzzHYagBUvbr61dEjAI7gxfnmP47JVp8C+Jx7V++uzhk9BOCQrmp5GvMvRw9hm7Z8B6CWjwb+h6NHANwOz87hzzGa4etz/7j64uoho4cAnKLnVT8+egTbtvWnAD7nzi1foflVo4cA3IY/qh5eXT16CNs2SwDU8lzaW6pzRw8B+AKurL6munT0ELZv668BuKn3VE+orhk9BOAWXFNdnMOfEzJTAFS9rvp71fWjhwDcxA3VU1uuUXAiZngR4M1dWv2/6vGjhwAc+Mf5OnNO2IwBUPXW6v3VdzbfXRBgf9zQ8na/nxs9hPnM9CLAW3Jx9ZLqLqOHANO5tnpa9bLRQ5jT7AFQ9ajqN/PuAODkXNnyBxDP+TOM29/1+9UjqneNHgJM4Z0tb/Vz+DPUrK8BuLkrql9q+c6Ahw/eAmzXC6onVh8aPQQ8BfD5ntLyghxfIATsysdbvtb3JaOHwOe4A/D53tXydpy/UT0okQQczctb3nH0xtFD4KYcbrfu0dXPVg8YvANYn/dWP1C9avQQuCVeBHjrXls9uHpO9YGxU4CVeH/Le/sfmMOfPeYOwKk7o/ru6odavlgI4Kb+rHpu9fMt7/GHvSYADu/0lo8Rfkb1HdWZY+cAA11bvaJ6fvVbLZ/sB6sgAI7m/JYvF3pKy/t6vagStu+G6s3Vi6qXVh8bOwduHwGwO2e1RMBjDh4PzmssYCv+rHr1TR5/NXYOHJ0AOD7nVBdWF7W8ZuDC6j4toXBWdd7BXz2FAONcV32y5aN5P3nw+GB1WfXug79eVl01aiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACfn/wNTTt/G4uEXNAAAAABJRU5ErkJggg=="
              data-v-inspector="components/cabinetItemProfile.vue:44:13" data-v-f992db80=""></image>
          </defs>
        </svg>
      </button>
    </div>
  </div>
  <div class="block lg:hidden">
    <button class="text-xl bg-white pt-3 pb-3 pl-3 pr-3 rounded-xl text-black line-clamp-1 leading-none">
      <svg width="20" height="20" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <mask id="mask0_542_1307" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="68" height="68">
          <rect width="68" height="68" fill="url(#pattern0_542_1307)" />
        </mask>
        <g mask="url(#mask0_542_1307)">
          <rect x="-25" y="-22" width="123" height="128" fill="#97CE5C" />
        </g>
        <defs>
          <pattern id="pattern0_542_1307" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_542_1307" transform="scale(0.00195312)" />
          </pattern>
          <image id="image0_542_1307" width="512" height="512"
            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABqUSURBVHic7d15lGZ5Xd/xd3fPAjMw04DsKpsiKgIjKksE1AEVBDHocQGJIuICRuEoIqJBFoEEJIrhgCBuJ66oOIoRRAQiomIgCoKK7EsAZxh2kGGYzh+3Oilqumeqq+p5frfqvl7n3EN31VP3fp+6Q38/z/duBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACn7NDoAmCQs6t7VedX51U3qq618b2LqrdVr6peXD2/+viAGpduO/vo1dWfZR+NdHZ1z+quXX4/va96a9N+Ov7/pY+tv0SAukb1pOrD1bFtLh+sHludM6DeJTpaPbFT30ePyz5ap53spw9Vj6/OHVAvsGAPqS5u+/9YbV0urB649qqX5cFNnxp3s4++e+1VL89u99NF1YPWXjWwOGdWv9TO/7HauvxCdcZa38HBd2b1nPZuHz0r+2gVzmhv99Ozs5+AFTmzeml79w/W8eWF1enrexsH2pnVS9r7ffSn2Ud7aVX76UXZT8AKPLu9/wfr+PL0Nb6Pg+xZrW4fPWeN7+OgW+V++qU1vg9gAR7S6v7BOr5857rezAH14Fa/jx6wtndzcH1/q99Pzq8B9sTRdneS0naXf62uvqb3dNCscx+5OmDnjjadtLfq/XRh9hOwB/5zq/8H6/jy6DW9p4PmSa1vH/3Uet7SgfTE1refHrOm9wQcUFfr1K5N3u1ycdMJUmzf2dlH+8HZTdfur2s/faC6ylreGR0eXQCswL2aQsC6XKP6mjVu7yAYsY++do3bOyju2XoPcZ1b3X2N21s0AYCD6PwB27zrgG3uZ/bR/mA/HWACAAfReQO2eZsB29zP7KP9wX46wAQADqKbDtjmzQZscz+zj/YH++kAEwA4aA415rI8Dzc5NfbR/jDisjz7aU08DpiD5rTqkwO2e2luZ7pdR5p+X+v2qab/Ptiew02/s3U7lg+na+GXDAALJAAAwAIJAACwQAIAACyQAAAACyQAAMACCQAAsEACAAAskAAAAAskAADAAgkAALBAAgAALJAAAAALJAAAwAJ5HPD8nF3dqzq/uk114+qaCWsAXN5l1fuqt1avrl5cPb/6+JX9oAAwH0erH6seUl1tcC0A7F8fqn6+enL1wZO9SACYh4dUj236pA8Ae+Gi6serZ5/omwLAWGdWz6geMLoQAA6sZ1c/UF2y+YsCwDhnVi+s7jK6EAAOvBdX92hTCDgyrpbFe2Z1n9FFALAIN60+s7rg+BcEgDF+oPqJ0UUAsCjnVe9qulrAIYABjlZvygl/AKzfRdXNqg+ZAKzfY6u7ji4CgEU6q7q0eokJwHpdrXpP081+AGCED1bXd3e59fr6NH8Axjq3ursAsF7njy4AAKrzBYD1Om90AQBQneccgPV6f9NVAAAw0r8KAOtzqOnMS1MXAEb7hACwPqe35T7MADCKT6MAsEACAAAskAAAAAskAADAAgkAALBAAgAALJAAAAALJAAAwAIJAACwQAIAACyQAAAACyQAAMACCQAAsEACAAAskAAAAAskAADAAgkAALBAAgAALJAAAAALJAAAwAIJAACwQAIAACyQAAAACyQAAMACCQAAsEACAAAskAAAAAskAADAAgkAALBAAgAALJAAAAALJAAAwAIJAACwQAIAACyQAAAACyQAAMACCQAAsEACAAAskAAAAAskAADAAgkAALBAAgAALJAAAAALJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsAOHRhewIE+pfnh0EQBQPfLw6AoW5OqjCwCADR8WANbnnNEFAMAGAWCNTAAAmIuPCADrYwIAwFyYAKyRCQAAc2ECsEYmAADMhQnAGgkAAMyFALBGDgEAMBcfcSOg9Tij+sToIgBgw5kmAOth/A/AXFxSXSIArIfxPwBz8eEqAWA9TAAAmIuPlACwLueOLgAANpgArNG1RxcAABsEgDW67ugCAGDD+0oAWJfrjC4AADZcWALAujgEAMBcCABrZAIAwFwIAGskAAAwFwLAGgkAAMyFALBGAgAAcyEArMlp1TVGFwEAGwSANblO5amLAMyFALAmxv8AzMXHq4+WALAOAgAAc3Hh8T8IAKvnNsAAzIUAsEY3Gl0AAGwQANbos0YXAAAbLjr+BwFg9UwAAJiLdx7/gwCwegIAAHPxjuN/EABWzyEAAOZCAFiTz6jOHl0EAGx4+/E/CACrZfwPwJyYAKzJZ48uAAA2fLS6+PhfBIDVMgEAYC7evvkvAsBqmQAAMBcCwBoJAADMxTs2/0UAWC2HAACYi3du/osAsFqfM7oAANjwts1/EQBW53rV0dFFAMAGhwDW5PNGFwAAmzgJcE1uProAANhwLOcArM0tRhcAABveWX188xcEgNVxCACAuXjD1i8IAKsjAAAwF/+y9QsCwGqcUd14dBEAsEEAWJObVaeNLgIANjgEsCbG/wDMiQCwJgIAAHNxafWWrV8UAFZDAABgLt5SfXLrFwWA1bjV6AIAYMM/n+iLAsDeO636wtFFAMCGyx3/LwFgFW5RXWV0EQCw4XKXAJYAsAq3GV0AAGxiArAmjv8DMCcmAGty3ugCAGDDB9ryFMDjBIC9ZwIAwFy8pulRwJcjAOytG1bXGV0EAGz4+5N9QwDYW04ABGBOXnOybwgAe+vWowsAgE1MANZEAABgLj5Vve5k3xQA9pYrAACYizdVHzvZNwWAvfMZ1eeMLgIANvzdFX1TANg7d6gOjS4CADac9ATAEgD20u1GFwAAm5z0BMASAPbSHUYXAACbXOEEwMh6bxyu3l+dM7oQAGi6BfA1O8ldAMsEYK98YZo/APPx911B8y8BYK8Y/wMwJ39zZS8QAPbG7UcXAACbCABrIgAAMCdXGgCcBLh7R6v3JUwBMA//p+nptFdI09q92+f3CMB8/PV2XqRx7d5Xji4AADa50vF/CQB7QQAAYE62NQFwDsDunNt0/P/I6EIAoOkRwEerj1zZC00AdudOaf4AzMc/tI3mXwLAbhn/AzAn2zr+XwLAbgkAAMyJALAG16huPboIANjkldt9oQCwc3fJ7w+A+bi4ev12X6yB7ZzxPwBz8tLqsu2+WADYOQEAgDl52am8WADYmetVtxxdBABsIgCswd1zEyUA5uPi6rWn8gMCwM7cfXQBALDJyzqF4/8lAOzEker80UUAwCanNP4vAWAn7lhdc3QRALDJS0/1BwSAU2f8D8CcnPLx/xIAduIeowsAgE1O+fh/CQCn6vrVrUYXAQCbnPLx/xIATtU9cvkfAPPykp38kABwahz/B2BO3t0Ojv+XAHAqzqzuNroIANjkBdWxnfygALB9d63OGV0EAGzyJzv9QQFg++4zugAA2ORT1Yt3+sMCwPYcqe41uggA2OSvm+4BsCMCwPZ8RXXt0UUAwCYv2M0PCwDbY/wPwNzs+Ph/uaZ9Ow5X76huMLoQANhwYXW9dnAHwONMAK7c7dP8AZiXF7SL5l8CwHYY/wMwN7s6/l8OAWzHm6ubjC4CADZcVl23umg3KzEBuGJfkuYPwLy8ol02/xIArsy3jy4AALb4/b1YiUMAJ3ekemfTWZYAMBc3rd6y25WYAJzc+Wn+AMzLq9uD5l8CwBW53+gCAGCL5+3VihwCOLGrVu/J0/8AmJdbVq/bixWZAJzYvdP8AZiXf2mPmn8JACdj/A/A3PzeXq7MIYDLu2b17uqM0YUAwCa3q165VyszAbi8b03zB2Be3lX97V6uUAC4vAeOLgAAtnhedWwvVygAfLpbV188uggA2OI393qFAsCn+97RBQDAFm+r/mqvVyoA/H9Xrb5tdBEAsMWvt8fj/xIANvvm6ujoIgBgiz0f/5cAsJmT/wCYm9dU/7CKFQsAk5tXXz66CADY4jdWtWIBYPKg3BQJgHk5Vv32qlau6dWZ1dur64wuBAA2eXl1p1Wt3ARgOvlP8wdgblY2/i8TgKq/brq/MgDMxSerG1QXrWoDS58A3DbNH4D5eX4rbP4lADx0dAEAcALPWfUGlnwI4NpNJ/9dZXQhALDJe6rPqi5d5UaWPAH4vjR/AObnl1px86/lTgBOq95SfeboQgBgk2NNN6d746o3tNQJwH3S/AGYn5e2huZfyw0ATv4DYI5WfvLfcUs8BHDn6mWjiwCALT7YdO3/x9axsSVOAB4+ugAAOIH/3pqafy1vAvAFTY9VXNr7BmD+blu9el0bW9oE4OFp/gDMz1+1xuZfywoAN6zuO7oIADiBp697g0sKAA+tzhhdBABscWH1u+ve6FICwDnVg0YXAQAn8MzqE+ve6FICwA9U544uAgC2uLR61ogNLyEAnJ0b/wAwT8+r3jliw0sIAP+x6cl/ADA3az/577iDfknc2dWbq+uMLgQAtnh9dcumBwCt3UGfADw4zR+Aefr5BjX/OtgTgLOaHvkrAAAwNxdXn119dFQBB3kC8P1p/gDM09Mb2Pzr4E4AzqreVF1vdCEAsMW/VTeu3juwhkMHdQLwg2n+AMzTrza2+Vd9zUGcABxt+vR/zdGFAMAWlzWd+f+Pg+v444M4AXhEmj8A83RB45v/51Zfe9ACwPWbxv8AMEdPGV1A0w3yDh+0APCTTScAAsDcvLx6xeAarl59Rx2sywBvUj1wdBEAcBJPHl1A9V1NT8g9UJcB/np139FFAMAJvK66VdNJgKMcajr/4PPq4EwAzqu+dXQRAHASj2ts86/6ujaafx2cAPCzHZz3AsDB8o/Vc0cX0XTy3/9zEJrmN1V3Hl0EAJzETzf+0//Nq7tt/sJ+DwBnVE8YXQQAnMQbq98eXUT10Lac97ffA8APNd3QAADm6PHVpYNrOFrdf+sX93MAuHb146OLAICTeHPTFWqjfVd1ta1f3M8B4NFNqQYA5ugJjf/0f3onuUPufr0PwK2rV1VHRhcCACfw5uoW1ScH1/HA6hdP9I39OAE4VD0tzR+A+Xp045v/kepHT/bN/RgAvjOX/QEwX/9Q/cboIqpvbLr874T22yGAc6p/anrqHwDM0ddXfzS6iOp/Vbc92Tf32wTgCWn+AMzXK6vnjy6iukdX0Pxrf00Azqv+Nsf+AZivr6peMrqI6i+qL7+iF+yXCcCR6hlp/gDM1wubR/O/U1fS/Gv/BICHVLcbXQQAnMSx5nNzukdu50X74RDAZzedUXn10YUAwEn8dvN4LP2tq//dNvr7fpgA/HyaPwDzdUn1qNFFbHhU2/xwP/cA8C1Nl1MAwFw9tXrT6CKqz6vus90Xz/kQwLnV66sbjC4EAE7iwqan0n5wdCFNDx6673ZfPOcJwM+l+QMwb/+peTT/W3aK5yDMdQJwz+ZxFyUAOJl/rG7V+Cf+VV3QKR4yn2MAONp01v8NRxcCAFfga5uu/R/tS6u/6RR7+hwPATw9zR+AeXth82j+VU9sBx/o5zYBuHf1B6OLAIArcEl1m6ZDAKPduXrZTn5wThOAa1fPGl0EAFyJpzaP5l/1pJ3+4JwmAKd8AgMArNk7qi+oPjK6kKaeecFOf3guE4DvTfMHYP4e1jya/+HqMbtZwRwmADdrum+x2/0CMGcvqr56dBEbvq36jd2sYHQAOK16eZ70B8C8XdJ0zf8/jy6kOtJ0ufwtdrOS0YcAHpPmD8D8PaV5NP+q72mXzb/GTgC+qvrTpiQDAHP11qZb7X50cB1V51RvqK672xWNmgBcr+mhBZo/AHP3Pc2j+df07IFdN/8aMwE4rfrz6k4Dtg0Ap+JXqgeMLmLDTZueknvmXqxsxATgSWn+AMzfRdWPji5ik59pj5p/rX8CcM/qDwdsFwBO1f3a5aV2e+grqpfs5QrX2YhvVL26uuYatwkAO/GC6u6ji9hwuHplddu9Xuk6XKX6/TR/AObvI9X3jy5ikwe0x82/1hcAfrb64jVtCwB240eaLv2bg6tVj1vFitcRAO7XdK9/AJi7P2teT6Z9ZHX9Vax41ecAnFf9RXX2ircDALv1oeqLqrePLmTDjZsu+7vqKla+ygnA9ZvO+Nf8AdgPHtZ8mn/V01pR86/VTQCuUr009/kHYH94UfU11bHRhWz4900nz6/MKgLAoeo3q29ZwboBYK+9v2n0/67RhWw4q3pd0yGAlVnFIYCfTPMHYP94cPNp/lWPbcXNv/Z+AnCf6rmNf8wwAGzHr1bfObqITb6oelV1+qo3tJcBwBn/AOwnb6lu03T2/xwcbuqjd1zXxvbCjao/SvMHYH+4tPr25tP8q767NTX/2psAcK3qT6ob7sG6AGAdfrp6xegiNrlWU01rs9sAcHb1x9Xn70EtALAOr6geP7qILZ5afcY6N7ibcwBOry5oPk9LAoAr8/6mZ9O8dXAdm53fdB+CdT6hd8cTgENN90rW/AHYL441PVnvrYPr2Ozs6hdac/OvnQeAJzevyyYA4Mr8TNPkek7+S3WzERveSeJ4dPVTe1wHAKzSK6s7VZeMLmSTr6j+vAGf/tvBRh9ZPWEVhQDAilzcdNz/baML2eSs6u+rzxlVwKkcAnhomj8A+8tlTdf7z6n5Vz2pgc2/th8AfrD6r6ssBABW4NFN96qZkztWDxldxHYOAfxw00l/Q45RAMAO/VH1DU1TgLk4q/q76nNHF3JlE4BHVE9J8wdgf3lj9R+aV/Ov6QZEw5t/nbyxH66e1gxGFABwij7SNGZ/7ehCtrhz01n/R0YXUnXaCb52pPrl6v5rrgUAduuy6n7Nr/mfW/1aM2n+dfkAcKT6laYzJgFgv3lE9YejiziBZzQ9OXc2th4CeEb1fSMKAYBd+uXqu0YXcQL3b/r0PyubA8A3Vc8dVQgA7MLLq7tWnxhdyBY3aTrr/5zRhWx1PABcrXpTdZ2BtQDATrylul114ehCtjjcdNLfXUYXciLHLwP8kTR/APafD1Vf3/yaf9VPNtPmX9ME4LTqXQkAAOwvn6ruXf3x6EJO4Eurv6xOH13IyRyuzk/zB2D/+aHm2fyPVr/VjJt/TQHg7qOLAIBT9ITq6aOLOIFD1S9WNx1dyJU5XJ03uggAOAW/Wv3E6CJO4qHVN44uYjsOVe+prju6EADYht+vvrnp+P/cfFn1F9UZowvZjkNN90w+e3QhAHAlXtp02PrfBtdxIteoXl3deHAd23a4mZ+kAABNzfXezbP5H2q6C+GNB9dxSg5X/zq6CAC4Am+q7tF0zf8cPbIpnOwrh6u3jS4CAE7ibU2Xq793dCEncZfqMaOL2InD1d+MLgIATuAdTc1/rh9UP7v6nS7/ZN194XD1gtFFAMAW76y+smn8P0dXrX6vfXwjvcPVy6p3jy4EADa8q3k3/6rnVF8yuojdONJ0LeUZTWMWABjpvU396A2jC7kCP1o9bHQRu3X8ccBHq9dX1x9YCwDL9tbqbtUbB9dxRe5W/UnTB+h97fjjgD9Qfe/IQgBYtH+q7ty8m/9Nqt/sADT/+vQ38YbqWtXtBtUCwDK9qrpr8z4f7Wj1501n/h8IW1PMC6svqL5wQC0ALM+Lqq+r3j+6kCtwevUHHbAPyFsDwLHqedU51e3XXw4AC/LM6v7Vx0cXciWeXn3L6CL22omOY1zWNAn4p+qO1dXXWhEAB917q/tWT23qOXP2YxvLgXNFJzK8rnp2dUl18wQBAHbn3dXjq++oXju4lu34xqYpxaEre+F+tN03dVr11dVXNU0FPqvphMGrrqguAPa3jzU9bO5d1curF1f/s/rEyKJOwZc03SjvrNGFAADr8blNhymOHfAFANhwnabL4kc3ZwEAANbknOrVjW/MAgAArMkZTfckGN2UBQAAWJPD1XMb35AFAABYk0NNl7yPbsYCAACs0ZMb34gFAABYo59ufBMWAABgjR7V+AY8egGARXlY45vvHBYAWIyHN77xzmUBgEV4ROOb7pwWADjwHtP4hju3BQAOrEPVUxvfbOe4AMCBdKj6ucY32rkuAHDgHK5+sfFNds4LABwoZ1a/1fgGO/cFAA6Ma1Qva3xznf1yaKe/YQCYmRtX/6P6/MF17AuHRxcAAHvgy6pXpPkDwGJ8T/WJZjBW32cLAOxL51S/0/hGul8XANh37lm9rfFNdD8vALBvXK/6tcY3z4OwAMDsXb3pYT4faHzjPCgLAMzWOdWjqosb3zAP2gIAs3OLpvv4f7jxjfJALm4EBMBc3Ki6d/XN1b8bXMuBJwAAMMrR6vbVHZvO6j9vbDnLIgAAsAqHmhr8WdVVqxtUN91YblbdpumuffrQIH7x63N6dcnoIgCgPAsAABZJAACABRIAAGCBBAAAWCABAAAWSAAAgAUSAABggQQAAFggAQAAFkgAAIAFEgAAYIEEAABYIAEAABZIAACABRIAAGCBBAAAWCABAAAWSAAAgAUSAABggQQAAFggAQAAFkgAAIAFEgAAYIEEAABYIAEAABZIAACABRIAAGCBBAAAWCABAAAWSAAAgAUSAABggQQAAFggAQAAFkgAAIAFEgAAYIEEAABYIAEAABZIAACABRIAAGCBBAAAWCABAAAWSAAAgAUSAABggQQAAFggAWB9Lq0uG10EAFSfEADW51j1odFFAED1AQFgvd48ugAAqN4kAKzXX44uAACqvxQA1uuC0QUAQHXBodEVLMzp1Xuqa44uBIDFem91QxOA9fpk9bOjiwBg0X6m+pQJwPqdXf1Ldf3RhQCwOO+qbl59zARg/T5aPXx0EQAszrHqodXHqo6MrWWxXludU91hdCEALMYTq/92/C8OAYxzpPrd6htGFwLAgffc6lvbdEdaE4BxjjUFgDOrLx9cCwAH19OqB7XldvQCwFjHqj9rOinwDtXVx5YDwAHyzuqB1VOb+s2nEQDm4bXVM6uPV7euzhpbDgD72IXV46pvr15zshc5B2B+jlR3qu5d3bG6SXWtPLkRgMv7VPW+6i1Nt5u/YON/PzWyKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOrP8LhC61NiB31KsAAAAASUVORK5CYII=" />
        </defs>
      </svg>
    </button>
  </div>

  <!-- Modal -->
  <div v-if="isModalOpen" class="fixed inset-0 flex items-top  justify-center bg-black bg-opacity-80 z-50">
    <div class="pr-2 pl-2 pt-20">
      <div class="bg-white rounded-lg pt-3 pr-6 pl-6 pb-3">
        <div class="flex justify-between md:justify-end items-center gap-9 md:gap-0">
          <h2 class="text-2xl font-semibold opacity-85 block md:hidden">Информация о пользователе</h2>
          <button @click="closeModal()" class="text-gray-600 hover:text-gray-900 text-3xl">&times;</button>
        </div>
        <div class="flex justify-between mt-3 gap-0 flex-col-reverse md:flex-row md:gap-4">
          <div class="w-full">
            <h2 class="text-2xl font-semibold opacity-85 hidden md:block">Информация о пользователе</h2>
            <div class="flex flex-col gap-1 mt-7 font-medium text-lg">
              <div class="flex justify-between text-start ">
                <p class="opacity-65">ID:</p>
                <p class="opacity-85">2223423</p>
              </div>
              <div class="flex justify-between">
                <p class="opacity-65">Текущий статус:</p>
                <p class="opacity-85">Консультант</p>
              </div>
              <div class="flex justify-between">
                <p class="opacity-65">Карьерная лестница:</p>
                <p class="opacity-85">1231231231</p>
              </div>
              <div class="flex justify-between">
                <p class="opacity-65">Циклы:</p>
                <p class="opacity-85">0</p>
              </div>
              <div class="flex justify-between">
                <p class="opacity-65">Квалификация:</p>
                <p class="opacity-85">Нет</p>
              </div>
              <div class="flex justify-between">
                <p class="opacity-65">Рефералов</p>
                <p class="opacity-85">9</p>
              </div>
              <div class="flex justify-between">
                <p class="opacity-65">Дата регистрации:</p>
                <p class="opacity-85">10.07.2024</p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-72 flex flex-row items-center md:flex-col">
            <div class="bg-gray-100 profile-image mb-3 rounded-full">
              <img src="" alt="">
            </div>
            <div class="pl-4 md:pl-0 flex gap-1 flex-col items-start">
              <h3 class="text-2xl font-semibold opacity-85 block md:hidden">Имя Фамилия</h3>
              <div class="border-2 rounded-xl pr-4 pl-4 text-red-500 border-red-500">Консультант</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'referralsContainer',
  setup() {
    const isModalOpen = ref(false);

    const openModal = () => {
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    return {
      isModalOpen,
      openModal,
      closeModal,
    };
  },
});
</script>

<style scoped>
.cabinet-item-image-container {
  min-width: 105px;
  height: 105px;
}

.skip-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.profile-image {
  width: 130px;
  height: 130px;
}
</style>