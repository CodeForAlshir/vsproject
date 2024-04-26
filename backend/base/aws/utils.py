from storages.backend.s3boto3 import S3Boto3Storage

StaticRootS3BotoStorage = lamba: S3Boto3Storage(location='static')
MediaRootS3BotoStorage = lamba: S3Boto3Storage(location='media')