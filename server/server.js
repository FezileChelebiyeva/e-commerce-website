const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;
let idCount = 5;
let products = {
  allProducts: [
    {
      id: 0,
      title:
        "we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-10_9816d83f-5594-4f55-b235-7a8f0ea6f8ba_large.jpg?v=1556083870",
      price: "60.00",
      discountPrice: "39.00",
      name: "Z Deal Product 1",
      sku: 3010,
      quantity: 1,
      total: "60.00",
    },
    {
      id: 1,
      title:
        "we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-9_cae893d3-4035-4cb3-9dfc-c62fb7d74fff_large.jpg?v=1556083849",
      price: "50.00",
      name: "Z Deal Product 2",
      sku: 101,
      quantity: 1,
      total: "50.00",
    },
    {
      id: 3,
      title:
        "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-8_17182a83-ddce-47fa-8ab5-7ad4a16bc82b_large.jpg?v=1556083825",
      price: "85.00",
      discountPrice: "70.00",
      name: "Z Deal Product 3",
      sku: 1110,
      quantity: 1,
      total: "85.00",
    },
    {
      id: 4,
      title:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-11_7c1b0a24-7b0a-45ee-9c0a-0422e9092338_large.jpg?v=1556013706",
      price: " 60.00",
      discountPrice: "39.00",
      name: "8. Countdown product",
      sku: 3010,
      quantity: 1,
      total: "60.00",
    },
    {
      id: 5,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-6_89dffb2f-9343-436d-896a-40fb00b43a88_230x_crop_center.jpg?v=1556013527",
      price: "85.00",
      discountPrice: "70.00",
      name: "3. Variable product",
      quantity: 1,
      total: "85.00",
    },
    {
      id: 6,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-1_230x_crop_center.jpg?v=1556013256",
      price: "130.00",
      discountPrice: "110.00",
      name: "1. New and sale badge product",
      quantity: 1,
      total: "130.00",
    },
    {
      id: 7,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-7_3f30c1ac-d08c-4f4d-bdd7-1b93549db772_230x_crop_center.jpg?v=1642926520",
      price: "29.00",
      discountPrice: "19.00",
      name: "Preorder Product",
      quantity: 1,
      total: "29.00",
    },
    {
      id: 8,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-6_b12651fa-e570-4091-9bec-b732f2f4cb3c_230x_crop_center.jpg?v=1556083783",
      price: "79.00",
      name: "Product dummy title",
      quantity: 1,
      total: "79.00",
    },
    {
      id: 9,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-5_117aee2e-68f1-4cee-be12-1e462e2823d8_230x_crop_center.jpg?v=1556083768",
      price: "75.00",
      discountPrice: "55.00",
      name: "Product dummy title",
      quantity: 1,
      total: "75.00",
    },
    {
      id: 10,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-7_5a86e643-b20a-4599-980f-db4d9abb0e7e_230x_crop_center.jpg?v=1556083801",
      price: "21.00",
      discountPrice: "19.00",
      name: "Product title here",
      quantity: 1,
      total: "21.00",
    },
    {
      id: 11,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-3_f6ebcba4-6715-4abe-974f-173d5052cf1e_230x_crop_center.jpg?v=1556013446",
      price: "39.00",
      name: "Product with video",
      quantity: 1,
      total: "39.00",
    },
    {
      id: 12,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-8_87297251-d3d7-4fcb-9834-8893be8b935e_large.jpg?v=1556083537",
      price: "29.00",
      name: "Dummy product name",
      quantity: 1,
      total: "29.00",
    },
    {
      id: 13,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-7_715d61f3-26a7-489a-b121-8dc1b77e23fb_large.jpg?v=1556083520",
      price: "29.00",
      quantity: 1,
      total: "29.00",
      discountPrice: "19.00",
      name: "Dummy product name",
    },
    {
      id: 14,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-2_3bdec385-9219-43dc-b560-59eb8b984c56_large.jpg?v=1556083212",
      price: "80.00",
      name: "Dummy product title",
      quantity: 1,
      total: "80.00",
    },
    {
      id: 15,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-8_303d734c-3a17-4f8a-b8de-72e04a079a2f_large.jpg?v=1556342333",
      price: "50.00",
      name: "5. Simple product",
      quantity: 1,
      total: "50.00",
    },
    {
      id: 16,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-12_2219de41-fa43-426e-ac55-0bcd734f730c_large.jpg?v=1556083617",
      price: "75.00",
      quantity: 1,
      total: "75.00",
      discountPrice: "55.00",
      name: "Dummy text for title",
    },
    {
      id: 17,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-3_102c82a4-0b06-4870-9cc6-343536b9b1af_large.jpg?v=1556083739",
      price: "39.00",
      quantity: 1,
      total: "39.00",
      name: "Dummy product title",
    },
    {
      id: 18,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-4_fcadd624-e23a-4f3c-b60f-557371639566_large.jpg?v=1556083305",
      price: "29.00",
      quantity: 1,
      total: "29.00",
      name: "Dummy product title",
    },
    {
      id: 19,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-9_1ae3b360-c704-4f68-ac4d-79fc8030bfa5_large.jpg?v=1556083554",
      price: "79.00",
      quantity: 1,
      total: "79.00",
      name: "Dummy product name",
    },
    {
      id: 20,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-3_62e0769e-2120-4585-800f-fc0c7c6b1306_large.jpg?v=1556083235",
      price: "50.00",
      quantity: 1,
      total: "50.00",
      name: "Dummy product name",
    },
    {
      id: 21,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-11_6de5f196-b07f-43df-8477-26122971b6b7_large.jpg?v=1556083601",
      price: "85.00",
      quantity: 1,
      total: "85.00",
      discountPrice: "70.00",
      name: "Dummy text for title",
    },
    {
      id: 22,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-11_6de5f196-b07f-43df-8477-26122971b6b7_large.jpg?v=1556083601",
      price: "85.00",
      quantity: 1,
      total: "85.00",
      discountPrice: "70.00",
      name: "Dummy product name",
    },
    {
      id: 23,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-1_a296fe3f-e602-42f0-932c-996b557dfbc7_large.jpg?v=1556083147",
      price: "21.00",
      quantity: 1,
      total: "21.00",
      discountPrice: "19.00",
      name: "Demo product title",
    },
    {
      id: 24,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-2_3bdec385-9219-43dc-b560-59eb8b984c56_large.jpg?v=1556083212",
      price: "80.00",
      quantity: 1,
      total: "80.00",
      name: "Demo product title",
    },
    {
      id: 25,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-4_fcadd624-e23a-4f3c-b60f-557371639566_large.jpg?v=1556083305",
      price: "29.00",
      quantity: 1,
      total: "29.00",
      name: "Demo product title",
    },
    {
      id: 26,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-12_f1aaf748-4815-496b-a55a-96b8642e93dd_large.jpg?v=1556013746",
      price: "79.00",
      quantity: 1,
      total: "79.00",
      name: "9. Without shortcode product",
    },
    {
      id: 27,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-10_7ec719c9-7435-4a3b-8a0e-eb4bd004833d_large.jpg?v=1556013669",
      price: "39.00",
      quantity: 1,
      total: "39.00",
      name: "7. Sample affiliate product",
    },
  ],
  dealsOfWeek: [
    {
      id: 0,
      title:
        "we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-10_9816d83f-5594-4f55-b235-7a8f0ea6f8ba_large.jpg?v=1556083870",
      price: "60.00",
      discountPrice: "39.00",
      name: "Z Deal Product 1",
      sku: 3010,
    },
    {
      id: 1,
      title:
        "we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-9_cae893d3-4035-4cb3-9dfc-c62fb7d74fff_large.jpg?v=1556083849",
      price: "50.00",
      name: "Z Deal Product 2",
      sku: 101,
    },
    {
      id: 3,
      title:
        "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-8_17182a83-ddce-47fa-8ab5-7ad4a16bc82b_large.jpg?v=1556083825",
      price: "85.00",
      discountPrice: "70.00",
      name: "Z Deal Product 3",
      sku: 1110,
    },
    {
      id: 4,
      title:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-11_7c1b0a24-7b0a-45ee-9c0a-0422e9092338_large.jpg?v=1556013706",
      price: " 60.00",
      discountPrice: "39.00",
      name: "8. Countdown product",
      sku: 3010,
    },
  ],
  bestSellers: [
    {
      id: 0,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-6_89dffb2f-9343-436d-896a-40fb00b43a88_230x_crop_center.jpg?v=1556013527",
      price: "85.00",
      discountPrice: "70.00",
      name: "3. Variable product",
    },
    {
      id: 1,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-1_230x_crop_center.jpg?v=1556013256",
      price: "130.00",
      discountPrice: "110.00",
      name: "1. New and sale badge product",
    },
    {
      id: 2,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-7_3f30c1ac-d08c-4f4d-bdd7-1b93549db772_230x_crop_center.jpg?v=1642926520",
      price: "29.00",
      discountPrice: "19.00",
      name: "Preorder Product",
    },
    {
      id: 3,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-6_b12651fa-e570-4091-9bec-b732f2f4cb3c_230x_crop_center.jpg?v=1556083783",
      price: "79.00",
      name: "Product dummy title",
    },
    {
      id: 4,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-10_9816d83f-5594-4f55-b235-7a8f0ea6f8ba_230x_crop_center.jpg?v=1556083870",
      price: "60.00",
      discountPrice: "39.00",
      name: "Z Deal Product 1",
    },
    {
      id: 5,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-5_117aee2e-68f1-4cee-be12-1e462e2823d8_230x_crop_center.jpg?v=1556083768",
      price: "75.00",
      discountPrice: "55.00",
      name: "Product dummy title",
    },
    {
      id: 6,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-9_cae893d3-4035-4cb3-9dfc-c62fb7d74fff_230x_crop_center.jpg?v=1556083849",
      price: "50.00",
      name: "Z Deal Product 2",
    },
    {
      id: 7,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-8_17182a83-ddce-47fa-8ab5-7ad4a16bc82b_230x_crop_center.jpg?v=1556083825",
      price: "85.00",
      discountPrice: "70.00",
      name: "Z Deal Product 3",
    },
    {
      id: 8,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-7_5a86e643-b20a-4599-980f-db4d9abb0e7e_230x_crop_center.jpg?v=1556083801",
      price: "21.00",
      discountPrice: "19.00",
      name: "Product title here",
    },
    {
      id: 9,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-3_f6ebcba4-6715-4abe-974f-173d5052cf1e_230x_crop_center.jpg?v=1556013446",
      price: "39.00",
      name: "Product with video",
    },
  ],
  category: {
    catFood: [
      {
        id: 0,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-6_89dffb2f-9343-436d-896a-40fb00b43a88_230x_crop_center.jpg?v=1556013527",
        price: "85.00",
        quantity: 1,
        total: "85.00",
        discountPrice: "70.00",
        name: "3. Variable product",
      },
      {
        id: 1,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-6_b12651fa-e570-4091-9bec-b732f2f4cb3c_230x_crop_center.jpg?v=1556083783",
        price: "79.00",
        quantity: 1,
        total: "79.00",
        name: "Product dummy title",
      },
      {
        id: 2,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-8_87297251-d3d7-4fcb-9834-8893be8b935e_large.jpg?v=1556083537",
        price: "29.00",
        quantity: 1,
        total: "29.00",
        name: "Dummy product name",
      },
      {
        id: 3,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-7_715d61f3-26a7-489a-b121-8dc1b77e23fb_large.jpg?v=1556083520",
        price: "29.00",
        quantity: 1,
        total: "29.00",
        discountPrice: "19.00",
        name: "Dummy product name",
      },
      {
        id: 4,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-2_3bdec385-9219-43dc-b560-59eb8b984c56_large.jpg?v=1556083212",
        price: "80.00",
        quantity: 1,
        total: "80.00",
        name: "Dummy product title",
      },
      {
        id: 5,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-8_303d734c-3a17-4f8a-b8de-72e04a079a2f_large.jpg?v=1556342333",
        price: "50.00",
        quantity: 1,
        total: "50.00",
        name: "5. Simple product",
      },
      {
        id: 6,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-12_2219de41-fa43-426e-ac55-0bcd734f730c_large.jpg?v=1556083617",
        price: "75.00",
        quantity: 1,
        total: "75.00",
        discountPrice: "55.00",
        name: "Dummy text for title",
      },
      {
        id: 7,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-3_102c82a4-0b06-4870-9cc6-343536b9b1af_large.jpg?v=1556083739",
        price: "39.00",
        quantity: 1,
        total: "39.00",
        name: "Dummy product title",
      },
    ],
    dogMedicine: [
      {
        id: 0,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-2_3bdec385-9219-43dc-b560-59eb8b984c56_large.jpg?v=1556083212",
        price: "80.00",
        quantity: 1,
        total: "80.00",
        name: "Dummy product title",
      },
      {
        id: 1,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-4_fcadd624-e23a-4f3c-b60f-557371639566_large.jpg?v=1556083305",
        price: "29.00",
        quantity: 1,
        total: "29.00",
        name: "Dummy product title",
      },
      {
        id: 2,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-12_2219de41-fa43-426e-ac55-0bcd734f730c_large.jpg?v=1556083617",
        price: "75.00",
        quantity: 1,
        total: "75.00",
        discountPrice: "55.00",
        name: "Dummy product title",
      },
      {
        id: 3,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-7_715d61f3-26a7-489a-b121-8dc1b77e23fb_large.jpg?v=1556083520",
        price: "29.00",
        discountPrice: "19.00",
        name: "Dummy product name",
      },
      {
        id: 4,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-9_1ae3b360-c704-4f68-ac4d-79fc8030bfa5_large.jpg?v=1556083554",
        price: "79.00",
        quantity: 1,
        total: "79.00",
        name: "Dummy product name",
      },
      {
        id: 5,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-8_87297251-d3d7-4fcb-9834-8893be8b935e_large.jpg?v=1556083537",
        price: "29.00",
        quantity: 1,
        total: "29.00",
        name: "Dummy product name",
      },
      {
        id: 6,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-3_62e0769e-2120-4585-800f-fc0c7c6b1306_large.jpg?v=1556083235",
        price: "50.00",
        quantity: 1,
        total: "50.00",
        name: "Dummy product name",
      },
      {
        id: 7,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-11_6de5f196-b07f-43df-8477-26122971b6b7_large.jpg?v=1556083601",
        price: "85.00",
        quantity: 1,
        total: "85.00",
        discountPrice: "70.00",
        name: "Dummy text for title",
      },
    ],
    dryKibbles: [
      {
        id: 0,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-2_3bdec385-9219-43dc-b560-59eb8b984c56_large.jpg?v=1556083212",
        price: "80.00",
        quantity: 1,
        total: "80.00",
        name: "Dummy product title",
      },
      {
        id: 1,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-4_fcadd624-e23a-4f3c-b60f-557371639566_large.jpg?v=1556083305",
        price: "29.00",
        quantity: 1,
        total: "29.00",
        name: "Dummy product title",
      },
      {
        id: 2,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-3_62e0769e-2120-4585-800f-fc0c7c6b1306_large.jpg?v=1556083235",
        price: "50.00",
        quantity: 1,
        total: "50.00",
        name: "Dummy product name",
      },
      {
        id: 3,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-11_6de5f196-b07f-43df-8477-26122971b6b7_large.jpg?v=1556083601",
        price: "85.00",
        quantity: 1,
        total: "85.00",
        discountPrice: "70.00",
        name: "Dummy product name",
      },
      {
        id: 4,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-9_1ae3b360-c704-4f68-ac4d-79fc8030bfa5_large.jpg?v=1556083554",
        price: "79.00",
        quantity: 1,
        total: "79.00",
        name: "Dummy product name",
      },
      {
        id: 5,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-8_87297251-d3d7-4fcb-9834-8893be8b935e_large.jpg?v=1556083537",
        price: "29.00",
        quantity: 1,
        total: "29.00",
        name: "Dummy product name",
      },
      {
        id: 6,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-7_715d61f3-26a7-489a-b121-8dc1b77e23fb_large.jpg?v=1556083520",
        price: "29.00",
        quantity: 1,
        total: "29.00",
        discountPrice: "19.00",
        name: "Dummy product name",
      },
      {
        id: 7,
        title: "",
        image:
          "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-6_fc6eb1e5-d049-48e2-8fff-9f61d16e15cf_large.jpg?v=1556083502",
        price: "80.00",
        quantity: 1,
        total: "80.00",
        name: "Dummy product name",
      },
    ],
  },
  trendingItems: [
    {
      id: 0,
      title: "",
      quantity: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-6_89dffb2f-9343-436d-896a-40fb00b43a88_230x_crop_center.jpg?v=1556013527",
      price: "85.00",
      total: "85.00",
      discountPrice: "70.00",
      name: "3. Variable product",
    },
    {
      id: 1,
      title: "",
      quantity: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-1_230x_crop_center.jpg?v=1556013256",
      price: "130.00",
      total: "130.00",
      discountPrice: "110.00",
      name: "1. New and sale badge product",
    },
    {
      id: 2,
      title: "",
      quantity: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-8_303d734c-3a17-4f8a-b8de-72e04a079a2f_large.jpg?v=1556342333",
      price: "50.00",
      total: "50.00",
      name: "5. Simple product",
    },
    {
      id: 3,
      title: "",
      quantity: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-1_a296fe3f-e602-42f0-932c-996b557dfbc7_large.jpg?v=1556083147",
      price: "21.00",
      total: "21.00",
      discountPrice: "19.00",
      name: "Demo product title",
    },
    {
      id: 4,
      title: "",
      quantity: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-2_3bdec385-9219-43dc-b560-59eb8b984c56_large.jpg?v=1556083212",
      price: "80.00",
      total: "80.00",
      name: "Demo product title",
    },
    {
      id: 5,
      title: "",
      quantity: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-7_3f30c1ac-d08c-4f4d-bdd7-1b93549db772_230x_crop_center.jpg?v=1642926520",
      price: "29.00",
      total: "29.00",
      discountPrice: "19.00",
      name: "Preorder Product",
    },
    {
      id: 6,
      title: "",
      quantity: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-4_fcadd624-e23a-4f3c-b60f-557371639566_large.jpg?v=1556083305",
      price: "29.00",
      total: "29.00",
      name: "Demo product title",
    },
    {
      id: 7,
      title: "",
      quantity: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-3_f6ebcba4-6715-4abe-974f-173d5052cf1e_230x_crop_center.jpg?v=1556013446",
      price: "39.00",
      total: "39.00",
      name: "Product with video",
    },
    {
      id: 8,
      title: "",
      quantity: 1,
      total: "79.00",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-12_f1aaf748-4815-496b-a55a-96b8642e93dd_large.jpg?v=1556013746",
      price: "79.00",
      name: "9. Without shortcode product",
    },
    {
      id: 9,
      title: "",
      quantity: 1,
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-10_7ec719c9-7435-4a3b-8a0e-eb4bd004833d_large.jpg?v=1556013669",
      price: "39.00",
      total: "39.00",
      name: "7. Sample affiliate product",
    },
  ],
  usersInterested: [
    {
      id: 0,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-6_89dffb2f-9343-436d-896a-40fb00b43a88_230x_crop_center.jpg?v=1556013527",
      price: "85.00",
      quantity: 1,
      total: "85.00",
      discountPrice: "70.00",
      name: "3. Variable product",
    },
    {
      id: 1,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-1_230x_crop_center.jpg?v=1556013256",
      price: "130.00",
      quantity: 1,
      total: "130.00",
      discountPrice: "110.00",
      name: "1. New and sale badge product",
    },
    {
      id: 2,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-7_3f30c1ac-d08c-4f4d-bdd7-1b93549db772_230x_crop_center.jpg?v=1642926520",
      price: "29.00",
      quantity: 1,
      total: "29.00",
      discountPrice: "19.00",
      name: "Preorder Product",
    },
    {
      id: 3,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-6_b12651fa-e570-4091-9bec-b732f2f4cb3c_230x_crop_center.jpg?v=1556083783",
      price: "79.00",
      quantity: 1,
      total: "79.00",
      name: "Product dummy title",
    },
    {
      id: 4,
      title:
        "we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-10_9816d83f-5594-4f55-b235-7a8f0ea6f8ba_large.jpg?v=1556083870",
      price: "60.00",
      quantity: 1,
      total: "69.00",
      discountPrice: "39.00",
      name: "Z Deal Product 1",
      sku: 3010,
    },
    {
      id: 5,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-6_b12651fa-e570-4091-9bec-b732f2f4cb3c_230x_crop_center.jpg?v=1556083783",
      price: "79.00",
      quantity: 1,
      total: "79.00",
      name: "Product dummy title",
    },
    {
      id: 6,
      title:
        "we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-9_cae893d3-4035-4cb3-9dfc-c62fb7d74fff_large.jpg?v=1556083849",
      price: "50.00",
      quantity: 1,
      total: "50.00",
      name: "Z Deal Product 2",
      sku: 101,
    },
    {
      id: 7,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-8_17182a83-ddce-47fa-8ab5-7ad4a16bc82b_230x_crop_center.jpg?v=1556083825",
      price: "85.00",
      quantity: 1,
      total: "85.00",
      discountPrice: "70.00",
      name: "Z Deal Product 3",
    },
    {
      id: 8,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-7_5a86e643-b20a-4599-980f-db4d9abb0e7e_230x_crop_center.jpg?v=1556083801",
      price: "21.00",
      quantity: 1,
      total: "21.00",
      discountPrice: "19.00",
      name: "Product title here",
    },
    {
      id: 9,
      title: "",
      image:
        "https://cdn.shopify.com/s/files/1/0067/1845/5893/products/product-3_f6ebcba4-6715-4abe-974f-173d5052cf1e_230x_crop_center.jpg?v=1556013446",
      price: "39.00",
      quantity: 1,
      total: "39.00",
      name: "Product with video",
    },
  ],
};

app.use(cors());
app.use(bodyParser.json());

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const selectProduct = products.find((product) => product.id == id);
  if (selectProduct) {
    res.send(selectProduct);
  } else {
    res.status(404).json({ message: "there is no such user..." });
  }
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  products = products.filter((element) => element.id != id);
  res.status(200).json({ message: "deleted product" });
});

app.post("/products", (req, res) => {
  const productsObj = {
    id: idCount++,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    imgUrl: req.body.imgUrl,
  };
  products.push(productsObj);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/products`);
});
