variable "cloudflare_zone_domain" {
  description = "Domain name for the zone"
  type        = string
}

variable "env_vars" {
  type = object({
    shared = object({
      NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = string
      NEXT_PUBLIC_OAK_ASSETS_HOST       = string
      NEXT_PUBLIC_OAK_ASSETS_PATH       = string
    })
    prod    = object({})
    preview = object({})
  })
}

variable "sensitive_env_vars" {
  type = object({
    shared  = object({})
    prod    = object({})
    preview = object({})
  })
  sensitive = true
}