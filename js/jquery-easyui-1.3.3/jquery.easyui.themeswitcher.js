$(function () {
    var themes = [
        {value: 'default', text: 'Default', group: 'Base'},
        {value: 'gray', text: 'Gray', group: 'Base'},
        {value: 'metro', text: 'Metro', group: 'Base'},
        {value: 'bootstrap', text: 'Bootstrap', group: 'Base'},
        {value: 'black', text: 'Black', group: 'Base'},
        {value: 'metro-blue', text: 'Metro Blue', group: 'Metro'},
        {value: 'metro-gray', text: 'Metro Gray', group: 'Metro'},
        {value: 'metro-green', text: 'Metro Green', group: 'Metro'},
        {value: 'metro-orange', text: 'Metro Orange', group: 'Metro'},
        {value: 'metro-red', text: 'Metro Red', group: 'Metro'},
    ];
    $('#cb-theme').combobox({
        groupField: 'group',
        data: themes,
        editable: false,
        panelHeight: 'auto',
        onChange: onChangeTheme,
        onLoadSuccess: function () {
            $(this).combobox('setValue', 'default');
        }
    });
});
function onChangeTheme(theme) {
    var link = $('#easyui_theme');
    link.attr('href', 'js/jquery-easyui-1.3.3/themes/' + theme + '/easyui.css');
}
