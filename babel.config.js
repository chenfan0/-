module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false
      }
    ],
    [
      '@babel/preset-typescript',
      {
        // 这个配置是为了处理vue文件解析后的ts的
        allExtensions: true
      }
    ]
  ]
}
