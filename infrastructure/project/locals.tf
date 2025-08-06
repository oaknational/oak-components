locals {
  env_groups = {
    shared  = ["production", "preview"]
    prod    = ["production"]
    preview = ["preview"]
  }

  non_sensitive_vars = flatten([
    for group, target in local.env_groups : [
      for key, value in var.env_vars[group] : {
        key       = key
        value     = value
        target    = target
        sensitive = false
      }
    ]
  ])

sensitive_env_vars = {
    shared = {}
    prod    = {}
    preview = {}
  }

  sensitive_vars = flatten([
    for group, target in local.env_groups : [
      for key, value in local.sensitive_env_vars[group] : {
        key       = key
        value     = value
        target    = target
        sensitive = true
      } if value != null
    ]
  ])

  environment_variables = concat(local.non_sensitive_vars, local.sensitive_vars)
}
