<?php

namespace AppBundle\Store;

use AppBundle\Entity\Product;
use Doctrine\ORM\EntityManager;
use Symfony\Component\HttpFoundation\Session\Session;

class ShoppingCart
{
    private $session;
    private $em;

    private $products;

    public function __construct(Session $session, EntityManager $em)
    {
        $this->session = $session;
        $this->em = $em;
    }

    public function addProduct(Product $product)
    {
        $products = $this->getProducts();

        if (!in_array($product, $products)) {
            $products[] = $product;
        }

        $this->products = $products;
        $this->saveProductsToSession();
    }

    /**
     * @return Product[]
     */
    public function getProducts()
    {
        if ($this->products === null) {
            $productRepo = $this->em->getRepository('AppBundle:Product');
            $ids = $this->session->get('product_ids', []);
            $products = [];
            foreach ($ids as $id) {
                $product = $productRepo->find($id);

                // in case a product becomes deleted
                if ($product) {
                    $products[] = $product;
                }
            }

            $this->products = $products;
        }

        return $this->products;
    }

    public function getTotal()
    {
        $total = 0;
        foreach ($this->getProducts() as $product) {
            $total += $product->getPrice();
        }

        return $total;
    }

    public function emptyCart()
    {
        $this->products = [];
        $this->saveProductsToSession();
    }

    private function saveProductsToSession()
    {
        $ids = array_map(function(Product $item) {
            return $item->getId();
        }, $this->getProducts());

        $this->session->set('product_ids', $ids);
    }
}