<template>
  <div class="bg-white w-full rounded-2xl p-6">
    <div class="flex justify-between items-start md:items-center flex-col md:flex-row">
      <h1 class="font-semibold opacity-85 text-3xl text-custom-green-1100 text-nowrap mb-5 md:mb-0">
        Реферальная ссылка</h1>
      <button
        class="flex justify-center gap-3 text-xl w-full md:w-auto bg-white pt-2.5 pb-2.5 pr-4 pl-4 rounded-3xl text-custom-green-1000 line-clamp-1 leading-none border-2 border-custom-green-1000">
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
  <div>
    <div class="lg:hidden flex justify-end">
      <button class="text-xl bg-custom-green-1000 pt-3 pb-3 pl-3 pr-3 rounded-xl text-black line-clamp-1 leading-none">
        <svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 487.3 487.3" xml:space="preserve">
          <g>
            <g>
              <path d="M487.2,69.7c0,12.9-10.5,23.4-23.4,23.4h-322c-12.9,0-23.4-10.5-23.4-23.4s10.5-23.4,23.4-23.4h322.1
			C476.8,46.4,487.2,56.8,487.2,69.7z M463.9,162.3H141.8c-12.9,0-23.4,10.5-23.4,23.4s10.5,23.4,23.4,23.4h322.1
			c12.9,0,23.4-10.5,23.4-23.4C487.2,172.8,476.8,162.3,463.9,162.3z M463.9,278.3H141.8c-12.9,0-23.4,10.5-23.4,23.4
			s10.5,23.4,23.4,23.4h322.1c12.9,0,23.4-10.5,23.4-23.4C487.2,288.8,476.8,278.3,463.9,278.3z M463.9,394.3H141.8
			c-12.9,0-23.4,10.5-23.4,23.4s10.5,23.4,23.4,23.4h322.1c12.9,0,23.4-10.5,23.4-23.4C487.2,404.8,476.8,394.3,463.9,394.3z
			 M38.9,30.8C17.4,30.8,0,48.2,0,69.7s17.4,39,38.9,39s38.9-17.5,38.9-39S60.4,30.8,38.9,30.8z M38.9,146.8
			C17.4,146.8,0,164.2,0,185.7s17.4,38.9,38.9,38.9s38.9-17.4,38.9-38.9S60.4,146.8,38.9,146.8z M38.9,262.8
			C17.4,262.8,0,280.2,0,301.7s17.4,38.9,38.9,38.9s38.9-17.4,38.9-38.9S60.4,262.8,38.9,262.8z M38.9,378.7
			C17.4,378.7,0,396.1,0,417.6s17.4,38.9,38.9,38.9s38.9-17.4,38.9-38.9C77.8,396.2,60.4,378.7,38.9,378.7z" />
            </g>
          </g>
        </svg>
      </button>
    </div>
  </div>
  <div class="w-full overflow-auto">

    <div class="tree">
      <ul>
        <li>
          <a href="#" class="bg-white">
            <div class="flex text-start gap-3 pt-4 pb-4 pr-2 pl-2 items-center">
              <div class=" bg-gray-100 w-20 h-20 rounded-full"><img src="" alt=""></div>
              <div>
                <h3 class="opacity-85 font-semibold text-xl mb-1">Имя ползователя</h3>
                <div class="flex gap-2">
                  <div class="border-2 rounded-xl pr-4 pl-4 text-red-500 border-red-500">Консультант</div>
                  <span class="text-sm bg-red-500 pr-2 pt-1 pb-1 pl-2 text-white rounded-lg hidden md:block">2</span>
                </div>
              </div>
            </div>
          </a>
          <ul>
            <li>
              <a href="#" class="bg-white">
                <div class="flex text-start gap-3 pt-4 pb-4 pr-2 pl-2 items-center">
                  <div class=" bg-gray-100 w-20 h-20 rounded-full"><img src="" alt=""></div>
                  <div>
                    <h3 class="opacity-85 font-semibold text-xl mb-1">Имя ползователя</h3>
                    <div class="flex gap-2">
                      <div class="border-2 rounded-xl pr-4 pl-4 text-red-500 border-red-500">Амбасадор</div>
                      <span
                        class="text-sm bg-red-500 pr-2 pt-1 pb-1 pl-2 text-white rounded-lg hidden md:block">2</span>
                    </div>
                  </div>
                </div>
              </a>
              <ul>
                <li>
                  <a href="#" class="bg-white">Grand Child</a>
                </li>
                <li>
                  <a href="#" class="bg-white">Grand Child</a>
                  <ul>
                    <li>
                      <a href="#" class="bg-white">Grand Child</a>
                    </li>
                    <li>
                      <a href="#" class="bg-white">Grand Child</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" class="bg-white">
                <div class="flex text-start gap-3 pt-4 pb-4 pr-2 pl-2 items-center">
                  <div class=" bg-gray-100 w-20 h-20 rounded-full"><img src="" alt=""></div>
                  <div>
                    <h3 class="opacity-85 font-semibold text-xl mb-1">Имя ползователя</h3>
                    <div class="flex gap-2">
                      <div class="border-2 rounded-xl pr-4 pl-4 text-red-500 border-red-500">Амбасадор</div>
                      <span
                        class="text-sm bg-red-500 pr-2 pt-1 pb-1 pl-2 text-white rounded-lg hidden md:block">2</span>
                    </div>
                  </div>
                </div>
              </a>
              <ul>
                <li>
                  <a href="#" class="bg-white">Grand Child</a>
                  <ul>
                    <li>
                      <a href="#" class="bg-white">Grand Grand Child</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" class="bg-white">Grand Child</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" class="bg-white">
                <div class="flex text-start gap-3 pt-4 pb-4 pr-2 pl-2 items-center">
                  <div class=" bg-gray-100 w-20 h-20 rounded-full"><img src="" alt=""></div>
                  <div>
                    <h3 class="opacity-85 font-semibold text-xl mb-1">Имя ползователя</h3>
                    <div class="flex gap-2">
                      <div class="border-2 rounded-xl pr-4 pl-4 text-red-500 border-red-500">Амбасадор</div>
                      <span
                          class="text-sm bg-red-500 pr-2 pt-1 pb-1 pl-2 text-white rounded-lg hidden md:block">2</span>
                    </div>
                  </div>
                </div>
              </a>
              <ul>
                <li>
                  <a href="#" class="bg-white">Grand Child</a>
                  <ul>
                    <li>
                      <a href="#" class="bg-white">Grand Grand Child</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" class="bg-white">Grand Child</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "chartData",

});
</script>

<style scoped>
.tree {
  transform-origin: 50%;
}

.tree ul {
  position: relative;
  padding: 5em 0;
  white-space: nowrap;
  margin: 0 auto;
  text-align: center;
}

.tree ul::after {
  content: '';
  display: table;
  clear: both;
}

.tree li {
  display: inline-block;
  vertical-align: top;
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: 5em 0.5em 0 0.5em;
}

.tree li::before,
.tree li::after {
  content: '';
  position: absolute;
  top: 0;
  right: 50%;
  border-top: 3px solid #85B056;
  width: 50%;
  height: 5em;
}

.tree li::after {
  right: auto;
  left: 50%;
  border-left: 3px solid #85B056;
}

.tree li:only-child::after,
.tree li:only-child::before {
  display: none;
}

.tree li:only-child {
  padding-top: 0;
}

.tree li:first-child::before,
.tree li:last-child::after {
  border: 0 none;
}

.tree li:last-child::before {
  border-right: 3px solid #85B056;
  border-radius: 0 5px 0 0;
}

.tree li:first-child::after {
  border-radius: 5px 0 0 0;
}

.tree ul ul::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  border-left: 3px solid #85B056;
  width: 0;
  height: 5em;
}

.tree li a {
  border: 3px solid #85B056;
  padding: 0.5em 0.75em;
  text-decoration: none;
  display: inline-block;
  border-radius: 5px;
  color: #000000;
  position: relative;
  top: 0;
}

.tree li a:hover,
.tree li a:hover+ul li a {
  background: #85B056;
  color: #fff;
  border: 3px solid #85B056;
}

.tree li a:hover+ul li::after,
.tree li a:hover+ul li::before,
.tree li a:hover+ul::before,
.tree li a:hover+ul ul::before {
  border-color: #85B056;
}
</style>
