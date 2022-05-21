import Blockly from "blockly"

export default {
    label: "网络",
    blocks: {
        "url_create": {
            define: {
                init: function() {
                    this.appendValueInput("url")
                        .appendField('创造URL')
                    this.appendDummyInput()
                        .appendField('')
                    this.setStyle("web_blocks");
                    this.setOutput(true, "url");
                }
            },
            code: function(block) {
                const value = Blockly.JavaScript.valueToCode(block, "url", Blockly.JavaScript.ORDER_ATOMIC);
                const value2 = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
                return [`new URL(${value})`, Blockly.JavaScript.ORDER_ATOMIC];
            }
        },
        "url_parsing": {
            define: {
                init: function() {
                    this.appendValueInput("url")
                        .setCheck("url")
                        .appendField("URL对象");
                    this.appendDummyInput()
                        .appendField("的")
                        .appendField(new Blockly.FieldDropdown([
                            ["从井号(#)开始的URL部分", "hash"],
                            ["主机名和端口号", "host"],
                            ["主机名", "hostname"],
                            ["端口号", "port"],
                            ["完整的URL", "href"],
                            ["域名", "origin"],
                            ["用户名", "username"],
                            ["密码", "password"],
                            ["路径", "pathname"],
                            ["协议", "protocol"],
                            ["从问号(?)开始的URL参数列表", "search"]
                        ]), "parsing");
                    this.setOutput(true, "String");
                    this.setStyle("web_blocks");
                    this.setTooltip("用于解析URL的各个部分");
                    this.setHelpUrl("https://docs.box3.codemao.cn/url.html");
                }
            },code: function(block) {
                const url = Blockly.JavaScript.valueToCode(block, "url", Blockly.JavaScript.ORDER_ATOMIC);
                const parsing = block.getFieldValue('parsing');
                return [`${url}.{parsing}`, Blockly.JavaScript.ORDER_ATOMIC];
            }
        }
    }
}
