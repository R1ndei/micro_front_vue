<template>
  <main>
    <div class="album py-5 bg-light">
      <div class="container">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" v-for="product in products" :key="product.id">
          <div class="col">
            <img :src="product.image" height="180">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                   role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                   focusable="false"><title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"/>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
              </svg>

              <div class="card-body">
                <p class="card-text">{{ product.title }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" @click="like(product.id)">Like
                    </button>
                  </div>
                  <small class="text-muted">{{ product.likes }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>

</template>

<script lang="ts">
import {onMounted, ref} from 'vue';
import {Product} from "@/interfaces/product";

export default {
  name: "Main_vue",
  setup() {
    const products = ref([] as Product[]);

    onMounted(async () => {
      const response = await fetch('http://localhost:8001/api/products')
      products.value = await response.json()
    })

    const like = async (id: number) => {
      await fetch(`http://localhost:8001/api/products/${id}/like`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
      });
      products.value = products.value.map(
          (p: Product) => {
            if (p.id === id) {
              p.likes++;
            }
            return p;
          }
      )
    }

    return {
      products,
      like
    }
  }
}
</script>