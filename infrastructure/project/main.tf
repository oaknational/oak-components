locals {
  workspace_prefix = "components-project-"
}

resource "terraform_data" "workspace_validation" {
  lifecycle {
    precondition {
      condition     = startswith(terraform.workspace, local.workspace_prefix)
      error_message = "Workspace name \"${terraform.workspace}\" must begin with ${local.workspace_prefix}"
    }
  }
}

module "vercel" {
  source                           = "github.com/oaknational/oak-terraform-modules//modules/vercel_project?ref=v1.2.1"
  build_command                    = "npm run build-storybook"
  build_type                       = "storybook"
  cloudflare_zone_domain           = var.cloudflare_zone_domain
  environment_variables            = local.environment_variables
  framework                        = "storybook"
  deployment_type                  = "standard_protection"
  git_repo                         = "oaknational/oak-components"
  protection_bypass_for_automation = false
  skew_protection                  = "1 day"

  domains = ["components-vercel.thenational.academy"]
}