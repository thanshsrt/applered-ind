// Rich text annotations used in the block content editor
import annotationLinkEmail from './annotations/linkEmail'
import annotationLinkExternal from './annotations/linkExternal'
import annotationLinkInternal from './annotations/linkInternal'
import annotationProduct from './annotations/product'

const annotations = [
  annotationLinkEmail,
  annotationLinkExternal,
  annotationLinkInternal,
  annotationProduct,
]

// Document types
import collection from './documents/collection'
import colorTheme from './documents/colorTheme'
import page from './documents/page'
import product from './documents/product'
import productV2 from './documents/productV2'
import productVariant from './documents/productVariant'
import category from './documents/category'
import blockContent from './documents/blockContent'
import user from './documents/user'
import account from './documents/account'
// import verificationToken from './documents/verification-token'
// import { user, account, verificationToken } from 'next-auth-sanity/schemas';

const documents = [
  collection,
  colorTheme,
  page,
  category,
  blockContent,
  productV2,
  product,
  productVariant,
  user,
  account,
  // verificationToken,
]

// Singleton document types
import home from './singletons/home'
import settings from './singletons/settings'

const singletons = [home, settings]

// Block content
import body from './blocks/body'

const blocks = [body]

// Object types
import customProductOptionColor from './objects/customProductOption/color'
import customProductOptionSize from './objects/customProductOption/size'
import imageWithProductHotspots from './objects/imageWithProductHotspots'
import linkExternal from './objects/linkExternal'
import linkInternal from './objects/linkInternal'
import heroCollection from './objects/hero/collection'
import heroHome from './objects/hero/home'
import heroPage from './objects/hero/page'
import moduleAccordion from './objects/module/accordion'
import moduleCallout from './objects/module/callout'
import moduleCallToAction from './objects/module/callToAction'
import moduleCollection from './objects/module/collection'
import moduleGrid from './objects/module/grid'
import moduleImage from './objects/module/image'
import moduleImages from './objects/module/images'
import moduleInstagram from './objects/module/instagram'
import moduleProduct from './objects/module/product'
import moduleProducts from './objects/module/products'
import placeholderString from './objects/placeholderString'
import productHotspots from './objects/productHotspots'
import productOption from './objects/productOption'
import productWithVariant from './objects/productWithVariant'
import proxyString from './objects/proxyString'
import seoHome from './objects/seo/home'
import seoPage from './objects/seo/page'
import seoShopify from './objects/seo/shopify'
import shopifyCollection from './objects/shopifyCollection'
import shopifyCollectionRule from './objects/shopifyCollectionRule'
import shopifyProduct from './objects/shopifyProduct'
import shopifyProductVariant from './objects/shopifyProductVariant'

const objects = [
  customProductOptionColor,
  customProductOptionSize,
  imageWithProductHotspots,
  linkExternal,
  linkInternal,
  heroCollection,
  heroHome,
  heroPage,
  moduleAccordion,
  moduleCallout,
  moduleCallToAction,
  moduleCollection,
  moduleGrid,
  moduleImage,
  moduleImages,
  moduleInstagram,
  moduleProduct,
  moduleProducts,
  placeholderString,
  productHotspots,
  productOption,
  productWithVariant,
  proxyString,
  seoHome,
  seoPage,
  seoShopify,
  shopifyCollection,
  shopifyCollectionRule,
  shopifyProduct,
  shopifyProductVariant,
]

export const schemaTypes = [...annotations, ...documents, ...singletons, ...objects, ...blocks]
