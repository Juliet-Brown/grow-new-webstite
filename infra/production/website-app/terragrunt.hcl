terraform {
  source = "git::git@github.com:springload/terragrunt-modules.git//website?ref=0.3-101-g2790942"
}

include {
  path = find_in_parent_folders()
}

inputs = {
  website_addresses                   = ["grow.springload.co.nz"]
  website_create_ssm                  = true
  website_error_handlers = [{
    error_caching_min_ttl = 0
    error_code            = 404
    response_code         = 200
    response_page_path    = "/"
    }
  ]
}
